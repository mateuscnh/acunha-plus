import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 400px;
  background: ${(props) => props.theme.colors.black_dark};
  text-align: right;
`;

export const Content = styled.div`
  position: absolute;
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
`;

export const Mask = styled.div`
  position: absolute;
  left: 24%;
  width: 100%;
  height: 400px;
  background: linear-gradient(90deg, #0f0e0c 19.75%, rgba(0, 0, 0, 0) 67.67%);
`;

export const Image = styled.img`
  height: 100%;
`;
