import styled from "styled-components";

import { Card as AntCard } from "antd";

export const Container = styled(AntCard)`
  padding: 40px 48px;
  background: ${(props) => props.theme.colors.black_dark};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
