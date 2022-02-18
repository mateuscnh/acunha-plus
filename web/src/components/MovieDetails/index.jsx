import React from "react";

import LikeButton from "@components/LikeButton";
import { Divider } from "antd";
import * as S from "./styles";

const MovieDetails = ({ isModalVisible, handleCancel, data }) => {
  const IMG_BASE_URL = process.env.REACT_APP_IMG_URL;

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
        <p>{data?.overview}</p>
        <Divider />
        <S.Footer>
          <p>O que você achou do filme? Curtiu ou não curtiu?</p>
          <LikeButton />
        </S.Footer>
      </S.Content>
    </S.Modal>
  );
};

export default MovieDetails;
