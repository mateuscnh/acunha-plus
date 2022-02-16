import React from "react";

import * as Styled from "./styles";

const SpinPage = ({ ...props }) => (
  <Styled.Container {...props}>
    <Styled.Spin />
  </Styled.Container>
);

export default SpinPage;
