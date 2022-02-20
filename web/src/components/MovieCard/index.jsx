import React, { memo, useCallback, useContext } from "react";

import { Tooltip } from "antd";

import * as S from "./styles";
import { SessionContext } from "@src/store/SessionProvider";

const IMG_BASE_URL = process.env.REACT_APP_IMG_URL;
const MovieCard = ({ movie, ...props }) => {
  const { setSelectedMovieId, selectedMovieId, setIsShowMovieDetails } =
    useContext(SessionContext);

  const handleMovieClicked = useCallback(() => {
    setSelectedMovieId(movie.id);
    setIsShowMovieDetails(true);
  }, [setSelectedMovieId, setIsShowMovieDetails, movie]);

  return (
    <>
      <Tooltip title={movie?.title} placement="bottom" {...props}>
        <S.Image
          alt={movie?.title}
          onClick={handleMovieClicked}
          src={!!movie?.poster_path && `${IMG_BASE_URL}${movie?.poster_path}`}
          isDetailsVisible={selectedMovieId === movie?.id}
        />
      </Tooltip>
    </>
  );
};

export default memo(MovieCard);
