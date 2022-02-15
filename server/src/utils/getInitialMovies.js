require("dotenv/config");
const axios = require("axios");

const URL = `${process.env.BASE_URL}/discover/movie?sort_by=popularity.desc&language=${process.env.LANG}&api_key=${process.env.API_KEY}`;

const REQUESTS = {
  one: axios.get(URL),
  two: axios.get(`${URL}&page=2`),
  three: axios.get(`${URL}&page=2`),
  four: axios.get(`${URL}&page=2`),
  five: axios.get(`${URL}&page=2`),
};

exports.getInitialMovies = async () => {
  try {
    const responses = await axios.all([
      REQUESTS.one,
      REQUESTS.two,
      REQUESTS.three,
      REQUESTS.four,
      REQUESTS.five,
    ]);
    const allResults = [];
    responses.forEach((res) => {
      allResults.push(
        ...res?.data?.results?.map(
          ({
            title,
            overview,
            backdrop_path,
            poster_path,
            release_date,
            vote_average,
            genre_ids,
          }) => ({
            title,
            overview,
            backdrop_path,
            poster_path,
            release_date,
            vote_average,
            genre_ids,
          })
        )
      );
    });
    console.log(allResults);
    return allResults;
  } catch (err) {
    return err;
  }
};
