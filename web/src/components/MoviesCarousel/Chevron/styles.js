import styled, { css } from "styled-components";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const defaultCSS = css`
  display: grid;
  place-items: center;
  padding: 0 6px;
  height: 108%;
  position: absolute;
  top: 50%;
  z-index: 2;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.black_dark};
  color: ${({ theme }) => theme.colors.white};
  transition: 0.3s;
  opacity: 0.6;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const ChevronLeft = styled(LeftOutlined)`
  ${defaultCSS}
`;

export const ChevronRight = styled(RightOutlined)`
  ${defaultCSS}
  right: 0;
`;
