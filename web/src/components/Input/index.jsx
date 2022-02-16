import React from "react";

import { Container, StyledInput, Label } from "./styles";

const Input = ({ labelName, onChange, ...props }) => (
  <Container>
    <StyledInput
      onChange={({ target: { value } }) => onChange(value)}
      {...props}
    />
    <Label>{labelName}</Label>
  </Container>
);

export default Input;
