import React, { useCallback, useContext, useEffect, useState } from "react";
import useSwr from "@src/hooks/userSwr";
import SpinPage from "@src/components/SpinPage";
import MoviesCarousel from "@src/components/MoviesCarousel/index";

import * as S from "./styles";
import MovieDetails from "@src/components/MovieDetails/index";
import { SessionContext } from "@src/store/SessionProvider";

const Home = () => {
  const {
    selectedMovieId,
    setSelectedMovieId,
    isShowMovieDetails,
    setIsShowMovieDetails,
  } = useContext(SessionContext);
  const [isPageFullyLoaded, setIsPageFullyLoaded] = useState(false);

  const { data } = useSwr("/movies");
  const { data: movieDetails } = useSwr(
    selectedMovieId ? `/movies/${selectedMovieId}` : null
  );

  const handleCloseModal = useCallback(() => {
    setSelectedMovieId(undefined);
    setIsShowMovieDetails(false);
  }, [setSelectedMovieId, setIsShowMovieDetails]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageFullyLoaded(true);
    }, 1 * 500);

    return () => clearTimeout(timer);
  }, []);

  if (!data || !isPageFullyLoaded) {
    return <SpinPage />;
  }

  return (
    <S.Container>
      {data
        ?.filter((genre) => genre.movies?.length > 6)
        .map(
          ({ id, name, movies }) =>
            movies.length > 0 && (
              <MoviesCarousel key={id} data={{ name, movies }} />
            )
        )}

      <MovieDetails
        data={movieDetails || {}}
        loading={!movieDetails}
        isModalVisible={isShowMovieDetails}
        handleCancel={handleCloseModal}
      />
    </S.Container>
  );
};

export default Home;
