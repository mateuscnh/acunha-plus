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
  async indexUsers(req, res, next) {
    try {
      const { user_id } = req.params;
      const results = await knex("interactions as i")
        .join("movies as m", "m.id", "i.movie_id")
        .where("i.user_id", user_id)
        .options({ nestTables: true });

      return res.json(results);
    } catch (error) {
      next(error);
    }
  },
  async create(req, res, next) {
    try {
      const { liked, rate, user_id, movie_id } = req.body;

      await knex("interactions").insert({
        liked,
        rate,
        user_id,
        movie_id,
      });
      return res.status(201).send();
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
