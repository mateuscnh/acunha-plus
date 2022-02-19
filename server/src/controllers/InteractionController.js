const knex = require("../database");

module.exports = {
  async index(req, res, next) {
    try {
      const { user_id } = req.params;
      const results = await knex("interactions as i")
        .where({ user_id })
        .join("movies as m", "m.id", "i.movie_id")
        .select("m.*", "m.id as movie_id", "i.liked", "i.id", "i.rate");
      return res.json(
        results?.map((result) => {
          const { id, liked, rate, movie_id, ...movie } = result;
          return {
            id,
            liked,
            rate,
            user_id,
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
      const { liked, rate, user_id, movie_id } = req.body;

      const [{ id }] = await knex("interactions")
        .insert({
          liked,
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
      const { liked, rate, user_id, movie_id } = req.body;
      await knex("interactions")
        .update({
          liked,
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
