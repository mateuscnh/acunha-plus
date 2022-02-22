import styled from "styled-components";

import { Modal as AntModal } from "antd";

export const Modal = styled(AntModal)`
  .ant-modal-content {
    border: 1px solid ${(props) => props.theme.colors.black};
    /* border-top: none; */
    > .ant-modal-close-x {
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
  @media (max-width: 400px) {
    height: 100vh;
    width: 100vw;
    top: 0;

    .ant-modal-content {
      position: relative;
      .ant-modal-close-x {
        display: block;
        background: ${({ theme }) => theme.colors.black_dark};
        opacity: 0.4;
        padding: 0;
        margin: 0;
        border-radius: 50%;
        color: white;
        margin: 8px;
        transition: 0.3s;
        position: relative;
        width: 32px;
        height: 32px;
        :hover {
          transform: scale(1.05);
        }

        svg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          padding: 0;
          margin: 0;
          font-weight: bold;
        }
      }
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
  @media (max-width: 400px) {
    top: -100px;
  }
`;

export const Content = styled.div`
  padding: 48px;
  padding-bottom: 0;
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
  .movie-details-rate {
    display: block;
    text-align: center;
  }
  .ant-divider {
    opacity: 0.4;
    background: ${(props) => props.theme.colors.white};
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 1.2rem;
    }
    p {
      opacity: 0.8;
      padding: 8px 0;
      font-size: 0.8rem;
      font-weight: 400;
    }
  }
`;

export const SubTitle = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.4;

  > span {
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
    @media (max-width: 400px) {
      p {
        font-size: 0.9rem;
        margin-top: 0;
        padding: 0;
      }
    }
  }
`;
