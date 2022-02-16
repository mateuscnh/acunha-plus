import React from "react";

import * as Styled from "./styles";

const Button = ({ children, ...props }) => (
  <Styled.Button {...props}>{children}</Styled.Button>
);

export default Button;
