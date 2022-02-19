import React, { useCallback, useContext } from "react";

import LikeButton from "@components/LikeButton";
import { Divider } from "antd";
import { CalendarOutlined, StarOutlined } from "@ant-design/icons";
import * as S from "./styles";
import { SessionContext } from "@src/store/SessionProvider";
import RateButton from "../RateButton/index";
import { formatDate } from "@src/utils/formatDate";

const IMG_BASE_URL = process.env.REACT_APP_IMG_URL;
const MovieDetails = ({ isModalVisible, handleCancel, data }) => {
  const { handleInteraction, selectedMovieInteraction } =
    useContext(SessionContext);

  const handleLikeMovie = useCallback(
    (liked) => {
      handleInteraction({
        ...selectedMovieInteraction,
        liked,
        data,
      });
    },
    [handleInteraction, data, selectedMovieInteraction]
  );
  const handleRateMovie = useCallback(
    (rate) => {
      handleInteraction({
        ...selectedMovieInteraction,
        rate,
        data,
      });
    },
    [handleInteraction, data, selectedMovieInteraction]
  );

  return (
    <S.Modal
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={false}
      width={540}
    >
      <S.Image
        src={`${IMG_BASE_URL}${data?.backdrop_path}`}
        alt={data?.title}
      />
      <S.Mask />
      <S.Content>
        <h1>{data?.title}</h1>
        <S.SubTitle>
          {data?.vote_average && (
            <div>
              <p>
                <StarOutlined className="star" />
              </p>
              <p>{data?.vote_average}</p>
            </div>
          )}
          {data?.release_date && (
            <div>
              <p>
                <CalendarOutlined />
              </p>
              <p>{formatDate(data?.release_date)}</p>
            </div>
          )}
        </S.SubTitle>
        <p>{data?.overview}</p>
        <Divider />
        <S.Footer>
          <LikeButton
            setLike={handleLikeMovie}
            liked={selectedMovieInteraction?.liked}
          />
          <RateButton
            setRate={handleRateMovie}
            rate={selectedMovieInteraction?.rate}
          />
        </S.Footer>
      </S.Content>
    </S.Modal>
  );
};

export default MovieDetails;
