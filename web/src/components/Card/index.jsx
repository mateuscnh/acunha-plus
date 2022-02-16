import React from "react";

import * as Styled from "./styles";

const Card = ({ children, ...cardProps }) => (
  <Styled.Container {...cardProps}>{children}</Styled.Container>
);

export default Card;
