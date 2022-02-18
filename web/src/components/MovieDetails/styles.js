import styled from "styled-components";

import { Modal as AntModal } from "antd";

export const Modal = styled(AntModal)`
  align-items: flex-start;
  > span {
    display: none;
  }
  .ant-modal-content {
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.6);
    border-radius: 6px;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.black_dark};
    .ant-modal-body {
      padding: 0 !important;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const Mask = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 320px;
  background: red;
  background: linear-gradient(
    360deg,
    #0f0f0c 11.05%,
    rgba(41, 39, 36, 0) 76.89%
  );
`;

export const Content = styled.div`
  padding: 0 48px;
  position: relative;
  top: -40px;
  z-index: 2;
  width: 100%;
  h1 {
    font-size: 1.4rem;
  }
  p {
    opacity: 0.8;
    padding: 8px 0;
    font-size: 1rem;
    font-weight: 400;
  }
  .ant-divider {
    opacity: 0.4;
    background: ${(props) => props.theme.colors.white};
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 0.8rem;
    width: 42%;
  }
`;
