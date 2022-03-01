import React from "react";
import styled from "styled-components";

import { ReactComponent as AcunhaLogo } from "@assets/icons/logo.svg";

const Container = styled.div`
  padding: 8px;

  > svg {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  }
`;

const Logo = ({ ...props }) => (
  <Container {...props}>
    <AcunhaLogo />
  </Container>
);

export default Logo;
