const knex = require("../database");
const { interactionsGroupedByUser } = require("../utils/handleRecommendations");
const { collaborativeFiltering } = require("../utils/collaborativeFiltering");
const { contentBasedFiltering } = require("../utils/contentBasedFiltering");

module.exports = {
  async indexByUsers(req, res, next) {
    try {
      const { user_id } = req.query;
      const [userInteractions] = await knex("users as u")
        .where({ user_id })
        .join("interactions as i", "u.id", "i.user_id")
        .select("u.id", "u.name", "i.rate", "i.movie_id")
        .then((data) => interactionsGroupedByUser(data));
      const allInteractions = await knex("users as u")
        .whereNot({ user_id })
        .join("interactions as i", "u.id", "i.user_id")
        .select("u.id", "u.name", "i.rate", "i.movie_id")
        .then((data) => interactionsGroupedByUser(data));

      const allMoviesId = collaborativeFiltering(
        userInteractions,
        allInteractions
      );

      const allMoviesByUsers = await knex("movies")
        .whereIn("id", allMoviesId.slice(0, 10))
        .then((data) => {
          data.sort((a, b) => {
            if (a.rate_average > b.rate_average) {
              return -1;
            }
            if (a.rate_average < b.rate_average) {
              return 1;
            }
            return 0;
          });
          return data;
        });

      return res.json(allMoviesByUsers);
    } catch (error) {
      next(error);
    }
  },
  async indexByItems(req, res, next) {
    try {
      const { user_id } = req.query;
      const userMoviesGenres = await knex("interactions as i")
        .where({ user_id })
        .join("movies as m", "m.id", "i.movie_id")
        .select("m.genre_ids", "m.id")
        .then((data) => {
          return data.map((result) => ({
            ...result,
            genre_ids: JSON.parse(result.genre_ids),
          }));
        });

      const allMoviesGenres = await knex("movies as m")
        .select("m.genre_ids", "m.id")
        .then((data) => {
          return data
            .map((result) => ({
              ...result,
              genre_ids: JSON.parse(result.genre_ids),
            }))
            .filter(
              (movie) =>
                !userMoviesGenres.find((userMovie) => userMovie.id === movie.id)
            );
        });
      const allRecommendedMoviesIds = contentBasedFiltering(
        userMoviesGenres,
        allMoviesGenres
      );

      const allMoviesByItems = await knex("movies").whereIn(
        "id",
        allRecommendedMoviesIds.slice(0, 10)
      );
      return res.json(allMoviesByItems);
    } catch (error) {
      next(error);
    }
  },
};
