const knex = require("../database");

module.exports = {
  async index(req, res, next) {
    try {
      const results = await knex("interactions");
      return res.json(results);
    } catch (error) {
      next(error);
    }
  },
  async indexByUser(req, res, next) {
    try {
      const { user_id } = req.params;
      const results = await knex("interactions as i")
        .where({ user_id })
        .join("movies as m", "m.id", "i.movie_id")
        .select("m.*", "m.id as movie_id", "i.id", "i.rate");
      return res.json(
        results?.map((result) => {
          const { id, rate, movie_id, ...movie } = result;
          return {
            id,
            rate,
            user_id: Number(user_id),
            movie_id,
            data: { id: movie_id, ...movie },
          };
        })
      );
    } catch (error) {
      next(error);
    }
  },
  async create(req, res, next) {
    try {
      const { rate, user_id, movie_id } = req.body;

      const [movie] = await knex("movies").where({ id: movie_id });
      const total_interactions = movie?.total_interactions + 1;
      const rate_average = (movie?.rate_average + rate) / total_interactions;

      await knex("movies")
        .update({ rate_average, total_interactions })
        .where({ id: movie_id });

      const [{ id }] = await knex("interactions")
        .insert({
          rate,
          user_id,
          movie_id,
        })
        .returning("id");
      return res.status(201).send({
        id,
      });
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { rate, current_rate, user_id, movie_id } = req.body;

      const [movie] = await knex("movies").where({ id: movie_id });
      const reset_average =
        movie?.rate_average * movie?.total_interactions - current_rate;
      const rate_average = (reset_average + rate) / movie?.total_interactions;

      await knex("movies").update({ rate_average }).where({ id: movie_id });

      await knex("interactions")
        .update({
          rate,
          user_id,
          movie_id,
        })
        .where({ id });
      return res.send();
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await knex("interactions").where({ id }).del();
      return res.send();
    } catch (error) {
      next(error);
    }
  },
};
