import React from "react";

import { Tooltip } from "antd";

import * as Styled from "./styles";

const MovieCard = ({ movie }) => {
  const IMG_BASE_URL = process.env.REACT_APP_IMG_URL;

  return (
    <Tooltip title={movie?.title} placement="bottom">
      <Styled.Image
        src={`${IMG_BASE_URL}${movie?.poster_path}`}
        alt={movie?.title}
      />
    </Tooltip>
  );
};

export default MovieCard;
