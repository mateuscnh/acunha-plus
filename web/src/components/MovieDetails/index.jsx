import React, { useCallback, useContext, useMemo } from "react";

import { Divider, Skeleton, Tooltip } from "antd";
import { CalendarOutlined, StarOutlined } from "@ant-design/icons";
import * as S from "./styles";
import { SessionContext } from "@src/store/SessionProvider";
import RateButton from "../RateButton/index";
import { formatDate } from "@src/utils/formatDate";
import useSwr from "@src/hooks/userSwr";
import api from "@src/services/api";

const IMG_BASE_URL = process.env.REACT_APP_IMG_URL_500;
const MovieDetails = ({ isModalVisible, handleCancel }) => {
  const { userLogged, selectedMovieId } = useContext(SessionContext);

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

  const user_interactions = useMemo(
    () => data?.user_interactions,
    [data?.user_interactions]
  );

  const handleMutate = useCallback(
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
      }
    },
    [
      selectedMovieId,
      data,
      mutate,
      postInteraction,
      putInteraction,
      userLogged?.id,
    ]
  );

  const handleRateMovie = useCallback(
    (rate) => {
      handleMutate({
        ...user_interactions,
        current_rate: user_interactions?.rate,
        rate,
      });
    },
    [handleMutate, user_interactions]
  );

  return (
    <S.Modal
      visible={isModalVisible}
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
          <RateButton
            setRate={handleRateMovie}
            className="movie-details-rate"
            rate={user_interactions?.rate}
          />
        </Skeleton>
      </S.Content>
    </S.Modal>
  );
};

export default MovieDetails;
