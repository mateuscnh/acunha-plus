import React from "react";

import * as S from "./styles";

const Input = ({ labelName, onChange, ...props }) => (
  <S.Container>
    <S.Input onChange={({ target: { value } }) => onChange(value)} {...props} />
    <S.Label>{labelName}</S.Label>
  </S.Container>
);

export default Input;
