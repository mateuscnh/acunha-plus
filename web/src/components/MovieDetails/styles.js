import styled from "styled-components";

import { Modal as AntModal } from "antd";

export const Modal = styled(AntModal)`
  .ant-modal-content {
    border: 1px solid ${(props) => props.theme.colors.black};
    border-top: none;
    > button {
      display: none;
    }
    box-shadow: ${({ theme }) => theme.colors.shadow};
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

export const SubTitle = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.4;

  > div {
    margin-right: 24px;
    display: flex;
    align-items: center;

    p {
      font-size: 1.1rem;
      margin-top: 0;
      padding: 0;
    }

    svg {
      margin-right: 8px;
    }

    .star {
      transform: scale(1.1);
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 0.8rem;
    width: auto;
  }
  .swiper-slide {
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;
