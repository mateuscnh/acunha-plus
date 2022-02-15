exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("interactions").del();
  await knex("interactions").insert([
    {
      liked: true,
      rate: 10,
      user_id: 1,
      movie_id: 1,
    },
  ]);
};
