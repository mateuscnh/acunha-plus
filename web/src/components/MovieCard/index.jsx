import React, { memo, useCallback, useState } from "react";

import { Tooltip } from "antd";

import * as S from "./styles";
import MovieDetails from "../MovieDetails/index";

const MovieCard = ({ movie, ...props }) => {
  const IMG_BASE_URL = process.env.REACT_APP_IMG_URL;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <>
      <Tooltip title={movie?.title} placement="bottom" {...props}>
        <S.Image
          alt={movie?.title}
          isModalVisible={isModalVisible}
          onClick={() => setIsModalVisible(true)}
          src={`${IMG_BASE_URL}${movie?.poster_path}`}
        />
      </Tooltip>
      <MovieDetails
        data={movie}
        isModalVisible={isModalVisible}
        handleCancel={handleCloseModal}
      />
    </>
  );
};

export default memo(MovieCard);
