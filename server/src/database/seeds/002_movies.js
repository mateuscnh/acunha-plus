const { getInitialMovies } = require("../../utils/getInitialMovies");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("movies").del();
  getInitialMovies().then(async (data) => {
    await knex("movies").insert([...data]);
  });
};
