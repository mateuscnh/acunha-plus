import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 400px;
  background: ${(props) => props.theme.colors.black_dark};
  text-align: right;
  @media (max-width: 400px) {
    text-align: center;
    height: 220px;
  }
`;

export const Content = styled.div`
  position: absolute;
  z-index: 2;
  padding: 34px;
  top: 50%;
  transform: translateY(-50%);
  text-align: left;
  width: 50%;

  .ant-divider {
    opacity: 0.4;
    background: ${(props) => props.theme.colors.white};
  }

  h1 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    margin-top: 0;
    padding: 0;
    opacity: 0.6;
  }

  @media (max-width: 960px) {
    h1 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
      font-weight: 400;
      margin-top: 0;
      padding: 0;
      opacity: 0.6;
    }
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

export const ImageContent = styled.div`
  display: inline-flex;
  z-index: 0;
  position: relative;
  height: 100%;
  background: red;
`;

export const Mask = styled.div`
  position: absolute;
  z-index: 1;
  left: -2px;
  width: 100%;
  height: 400px;
  background: linear-gradient(90deg, #0f0e0c 8%, rgba(0, 0, 0, 0) 90%);
`;

export const Image = styled.img`
  height: 100%;
`;
