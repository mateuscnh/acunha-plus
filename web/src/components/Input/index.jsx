import React from "react";

import { Container, StyledInput, Label } from "./styles";

const Input = ({ labelName, ...props }) => (
  <Container>
    <StyledInput {...props} />
    <Label>{labelName}</Label>
  </Container>
);

export default Input;
