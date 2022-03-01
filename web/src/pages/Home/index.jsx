import React, { useCallback, useContext, useEffect, useState } from "react";
import useSwr from "@src/hooks/userSwr";
import SpinPage from "@src/components/SpinPage";
import MoviesCarousel from "@src/components/MoviesCarousel/index";

import { notification } from "antd";
import * as S from "./styles";
import MovieDetails from "@src/components/MovieDetails/index";
import { SessionContext } from "@src/store/SessionProvider";
import PopularMoviesCarousel from "@src/components/PopularMoviesCarousel/index";
import Footer from "@src/components/Footer";
import FooterTMBD from "@src/components/FooterTMBD/index";

const Home = () => {
  const { setSelectedMovieId, setIsShowMovieDetails } =
    useContext(SessionContext);

  const { data } = useSwr("/movies");

  const handleCloseModal = useCallback(() => {
    setSelectedMovieId(undefined);
    setIsShowMovieDetails(false);
  }, [setSelectedMovieId, setIsShowMovieDetails]);

  const openNotification = useCallback(() => {
    notification.open({
      message: "Obrigado por participar!",
      duration: 20,
      onClose: () => notification.destroy(),
      description: (
        <p>
          Avalie no mínimo 10 filmes e veja quais filmes iremos lhe recomendar!
          Quanto mais filmes você avaliar, mais precisas serão as recomendações.
        </p>
      ),
    });
  }, []);

  useEffect(() => {
    let timer;
    if (data) {
      timer = setTimeout(() => {
        openNotification();
      }, 2 * 1000);
    }
    return () => clearTimeout(timer);
  }, [data, openNotification]);

  if (!data) {
    return <SpinPage />;
  }

  return (
    <>
      <S.Container>
        <PopularMoviesCarousel
          key="most-popular-movies"
          data={{ name: "Popular", movies: data?.mostPopularMovies }}
        />
        {data?.moviesByGenres
          ?.filter((genre) => genre.movies?.length > 6)
          .map(
            ({ id, name, movies }) =>
              movies.length > 0 && (
                <MoviesCarousel key={id} data={{ name, movies }} />
              )
          )}
        <FooterTMBD />
        <Footer />
      </S.Container>
      <MovieDetails handleCancel={handleCloseModal} />
    </>
  );
};

export default Home;
