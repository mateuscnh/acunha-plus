const knex = require("../database");
module.exports = {
  async moviesByGenre(req, res, next) {
    try {
      const movies = await knex("movies");
      const genres = await knex("genres");
      return res.json(
        genres.map((genre) => {
          return {
            ...genre,
            movies: movies.filter((movie) => movie.main_genre === genre.id),
          };
        })
      );
    } catch (error) {
      next(error);
    }
  },
  async movieById(req, res, next) {
    try {
      const { id } = req.params;
      const { user_id } = req.query;
      const movie = await knex("movies").select().where({ id });
      const [user_interactions] = await knex("interactions as i")
        .select()
        .where({ user_id, movie_id: id });

      return res.json({
        user_interactions,
        ...movie?.[0],
      });
    } catch (error) {
      next(error);
    }
  },
  // async movieByTitle(req, res, next) {
  //   try {
  //     const { title } = req.query;
  //     console.log(title);
  //     const movie = await knex("movies").where("title", "ilike", title);

  //     return res.json(movie);
  //   } catch (error) {
  //     next(error);
  //   }
  // },
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
