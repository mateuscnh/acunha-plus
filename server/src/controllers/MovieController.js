const knex = require("../database");
module.exports = {
  async index(req, res, next) {
    try {
      const { page = "1", movies_per_page = "10" } = req.query;
      const results = await knex("movies")
        .limit(movies_per_page)
        .offset((Number(page) - 1) * movies_per_page);
      const [count] = await knex("movies").count();
      return res.json({ page, total: Number(count["count"]), movies: results });
    } catch (error) {
      next(error);
    }
  },
  async create(req, res, next) {
    try {
      const {
        title,
        overview,
        backdrop_path,
        poster_path,
        release_date,
        vote_average,
        genre_ids,
      } = req.body;

      await knex("movies").insert({
        title,
        overview,
        backdrop_path,
        poster_path,
        release_date,
        vote_average,
        genre_ids: JSON.stringify(genre_ids),
      });
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const {
        title,
        overview,
        backdrop_path,
        poster_path,
        release_date,
        vote_average,
        genre_ids,
      } = req.body;
      await knex("movies")
        .update({
          title,
          overview,
          backdrop_path,
          poster_path,
          release_date,
          vote_average,
          genre_ids,
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
      await knex("movies").where({ id }).del();
      return res.send();
    } catch (error) {
      next(error);
    }
  },
};
