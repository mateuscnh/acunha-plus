import React from "react";

import { Container } from "./styles";

const Card = ({ children, ...cardProps }) => (
  <Container {...cardProps}>{children}</Container>
);

export default Card;
