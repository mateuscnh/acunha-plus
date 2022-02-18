require("dotenv/config");
const axios = require("axios");

const URL = `${process.env.BASE_URL}/discover/movie?sort_by=popularity.desc&language=pt-BR&api_key=${process.env.API_KEY}`;

const REQUESTS = {
  one: axios.get(URL),
  two: axios.get(`${URL}&page=2`),
  three: axios.get(`${URL}&page=3`),
  four: axios.get(`${URL}&page=4`),
  five: axios.get(`${URL}&page=5`),
  six: axios.get(`${URL}&page=6`),
  seven: axios.get(`${URL}&page=7`),
  eight: axios.get(`${URL}&page=8`),
  nine: axios.get(`${URL}&page=9`),
  ten: axios.get(`${URL}&page=10`),
};

exports.getInitialMovies = async () => {
  try {
    const responses = await axios.all([
      REQUESTS.one,
      REQUESTS.two,
      REQUESTS.three,
      REQUESTS.four,
      REQUESTS.five,
      REQUESTS.six,
      REQUESTS.seven,
      REQUESTS.eight,
      REQUESTS.nine,
      REQUESTS.ten,
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
            main_genre: genre_ids[0],
            genre_ids: JSON.stringify(genre_ids),
          })
        )
      );
    });
    return allResults;
  } catch (err) {
    return err;
  }
};
