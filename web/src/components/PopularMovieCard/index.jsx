import React, { memo, useCallback, useContext } from "react";

import { Tooltip } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import * as S from "./styles";
import { formatDate } from "@src/utils/formatDate";
import { SessionContext } from "@src/store/SessionProvider";

const IMG_BASE_URL = process.env.REACT_APP_IMG_URL_ORIGINAL;
const PopularMovieCard = ({ movie, ...props }) => {
  const { setSelectedMovieId, setIsShowMovieDetails } =
    useContext(SessionContext);

  const handleMovieClicked = useCallback(() => {
    setSelectedMovieId(movie.id);
    setIsShowMovieDetails(true);
  }, [setSelectedMovieId, setIsShowMovieDetails, movie]);

  return (
    <S.Container onClick={handleMovieClicked}>
      <S.Mask />
      <S.Content>
        <h1>{movie?.title}</h1>
        <S.SubTitle>
          {!!movie?.release_date && (
            <Tooltip title="movie de lançamento">
              <p>
                <CalendarOutlined />
              </p>
              <p>{formatDate(movie?.release_date)}</p>
            </Tooltip>
          )}
        </S.SubTitle>
        <p>{movie?.overview}</p>
      </S.Content>
      <S.Image
        alt={movie?.title}
        src={!!movie?.poster_path && `${IMG_BASE_URL}${movie?.backdrop_path}`}
      />
    </S.Container>
  );
};

export default memo(PopularMovieCard);
