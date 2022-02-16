import styled from "styled-components";

import { Button as AntButton } from "antd";

export const Button = styled(AntButton)`
  margin: 16px 0;
  width: 100%;
  height: 50px;
  border: none;
  font-size: 16px;
  border-radius: 4px;
  font-weight: bold;
  text-transform: uppercase;
  background: ${({ disabled, theme }) =>
    disabled && theme.colors.black_light} !important;
`;
