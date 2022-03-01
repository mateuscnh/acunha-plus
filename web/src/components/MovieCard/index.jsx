import React, { memo, useCallback, useContext, useMemo } from "react";

import { Tooltip } from "antd";

import * as S from "./styles";
import { SessionContext } from "@src/store/SessionProvider";

const IMG_BASE_URL = process.env.REACT_APP_IMG_URL_500;
const MovieCard = ({ movie, allInteractions, ...props }) => {
  const { setSelectedMovieId, selectedMovieId, setIsShowMovieDetails } =
    useContext(SessionContext);

  const movieHasBeenRated = useMemo(
    () =>
      !!allInteractions?.find(
        (interaction) => interaction.movie_id === movie.id
      ),
    [allInteractions, movie?.id]
  );

  const handleMovieClicked = useCallback(() => {
    setSelectedMovieId(movie.id);
    setIsShowMovieDetails(true);
  }, [setSelectedMovieId, setIsShowMovieDetails, movie]);

  return (
    <Tooltip title={movie?.title} placement="bottom" {...props}>
      <S.Image
        alt={movie?.title}
        disabled={movieHasBeenRated}
        onClick={handleMovieClicked}
        src={!!movie?.poster_path && `${IMG_BASE_URL}${movie?.poster_path}`}
        isDetailsVisible={selectedMovieId === movie?.id}
      />
    </Tooltip>
  );
};

export default memo(MovieCard);
