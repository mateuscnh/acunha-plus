import React from "react";

import { Container, StyledInput, Label } from "./styles";

const Input = ({ labelName, ...InputProps }) => (
  <Container>
    <StyledInput {...InputProps} />
    <Label>{labelName}</Label>
  </Container>
);

export default Input;
