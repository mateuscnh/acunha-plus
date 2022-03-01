import styled, { css } from "styled-components";

import { Button as AntButton } from "antd";

export const Container = styled.div`
  text-align: center;
`;

export const Content = styled.div`
  display: inline-flex;
  background: #232221;
  border-radius: 50px;
  > span {
    display: block;
    width: 16px;
  }
`;

const activeButton = css`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
`;

const offButton = css`
  color: ${({ theme }) => theme.colors.black_light};
  background: ${({ theme }) => theme.colors.gray};
`;

export const Button = styled(AntButton)`
  border-radius: 50px;
  border: none;
  width: 50px;
  height: 50px;
  span {
    font-size: 24px;
  }
  :focus {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
  }
  ${({ like }) => (like ? activeButton : offButton)}
`;
