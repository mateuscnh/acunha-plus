import React from "react";

import * as S from "./styles";

const Card = ({ children, ...cardProps }) => (
  <S.Container {...cardProps}>{children}</S.Container>
);

export default Card;
