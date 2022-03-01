import React, { useCallback, useContext, useMemo } from "react";

import { Divider, Skeleton, Tooltip } from "antd";
import { CalendarOutlined, StarOutlined } from "@ant-design/icons";
import * as S from "./styles";
import { SessionContext } from "@src/store/SessionProvider";
import RateButton from "../RateButton";
import { formatDate } from "@src/utils/formatDate";
import useSwr from "@src/hooks/userSwr";
import api from "@src/services/api";
import LikeButton from "../LikeButton/index";

const IMG_BASE_URL = process.env.REACT_APP_IMG_URL_500;
const MovieDetails = ({ handleCancel, mutateMovieCard }) => {
  const {
    userLogged,
    selectedMovieId,
    setCountInteractions,
    setCountRecommendationsInteractions,
    isShowMovieDetails,
  } = useContext(SessionContext);

  const { data, mutate } = useSwr(
    selectedMovieId
      ? `/movies/${selectedMovieId}?user_id=${userLogged?.id}`
      : null
  );

  const postInteraction = useCallback(
    (payload) => api.post("/interactions", payload),
    []
  );
  const putInteraction = useCallback(
    (payload) => api.put(`/interactions/${payload?.id}`, payload),
    []
  );

  const postRecommendationsInteraction = useCallback(
    (payload) => api.post("/recommendations/interactions", payload),
    []
  );
  const putRecommendationsInteraction = useCallback(
    (payload) =>
      api.put(`/recommendations/interactions/${payload?.id}`, payload),
    []
  );

  const user_interactions = useMemo(
    () => data?.user_interactions,
    [data?.user_interactions]
  );

  const user_recommendations_interactions = useMemo(
    () => data?.user_recommendations_interactions,
    [data?.user_recommendations_interactions]
  );

  const handleMutateRate = useCallback(
    async (newInteraction) => {
      const payload = {
        ...newInteraction,
        user_id: userLogged.id,
        movie_id: selectedMovieId,
      };

      const hasId = !!payload?.id;

      if (hasId) {
        await putInteraction(payload);
        mutate({
          ...data,
          user_interactions: payload,
        });
      } else {
        const {
          data: { id },
        } = await postInteraction(payload);
        mutate({
          ...data,
          user_interactions: { ...payload, id },
        });
        setCountInteractions((oldCount) => oldCount + 1);
      }
    },
    [
      selectedMovieId,
      data,
      mutate,
      postInteraction,
      putInteraction,
      userLogged?.id,
      setCountInteractions,
    ]
  );

  const handleMutateLike = useCallback(
    async (newInteraction) => {
      const payload = {
        ...newInteraction,
        user_id: userLogged.id,
        movie_id: selectedMovieId,
      };

      const hasId = !!payload?.id;

      if (hasId) {
        await putRecommendationsInteraction(payload);
        mutate({
          ...data,
          user_recommendations_interactions: payload,
        });
      } else {
        const {
          data: { id },
        } = await postRecommendationsInteraction(payload);
        mutate({
          ...data,
          user_recommendations_interactions: { ...payload, id },
        });
        setCountRecommendationsInteractions((oldCount) => oldCount + 1);
      }
    },
    [
      data,
      mutate,
      postRecommendationsInteraction,
      putRecommendationsInteraction,
      selectedMovieId,
      setCountRecommendationsInteractions,
      userLogged?.id,
    ]
  );

  const handleRateMovie = useCallback(
    (rate) => {
      if (rate > 0) {
        handleMutateRate({
          ...user_interactions,
          rate,
        });
      }
    },
    [handleMutateRate, user_interactions]
  );

  const handleLikeMovie = useCallback(
    (liked) => {
      handleMutateLike({
        ...user_recommendations_interactions,
        liked,
      });
    },
    [handleMutateLike, user_recommendations_interactions]
  );

  return (
    <S.Modal
      visible={isShowMovieDetails}
      onCancel={handleCancel}
      loading={!data}
      footer={false}
      width={540}
    >
      <S.Image
        src={
          data?.backdrop_path &&
          data?.id === selectedMovieId &&
          `${IMG_BASE_URL}${data?.backdrop_path}`
        }
        alt={data?.title}
      />
      <S.Mask />
      <S.Content>
        <Skeleton loading={!data}>
          <h1>{data?.title}</h1>
          <S.SubTitle>
            {!!data?.rate_average && (
              <Tooltip
                title={`Média de avaliações${
                  data?.total_interactions > 1 &&
                  `, baseado em ${data?.total_interactions} usuários`
                }`}
              >
                <p>
                  <StarOutlined className="star" />
                </p>
                <p>{data?.rate_average}</p>
              </Tooltip>
            )}
            {!!data?.release_date && (
              <Tooltip title="Data de lançamento">
                <p>
                  <CalendarOutlined />
                </p>
                <p>{formatDate(data?.release_date)}</p>
              </Tooltip>
            )}
          </S.SubTitle>
          <p>{data?.overview}</p>

          <Divider />
          {userLogged?.isRecommendation ? (
            <LikeButton
              handleLike={handleLikeMovie}
              liked={user_recommendations_interactions?.liked}
            />
          ) : (
            <RateButton
              handleRate={handleRateMovie}
              className="movie-details-rate"
              rate={user_interactions?.rate}
            />
          )}
        </Skeleton>
      </S.Content>
    </S.Modal>
  );
};

export default MovieDetails;
