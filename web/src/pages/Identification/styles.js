import styled, { keyframes } from "styled-components";
import background from "../../assets/images/background.png";

const finished = keyframes`
  to {
    opacity: 1
  }
`;

export const Background = styled.div`
  position: relative;
  background: no-repeat center url(${background});
  background-size: cover;
  opacity: 0;
  animation: ${finished} 0.3s forwards;
`;

export const Mask = styled.div`
  position: absolute;
  z-index: 1;
  background: ${({ theme }) => theme.colors.radial_gradient};
  width: 100%;
  height: 100%;
  opacity: 0.5;
`;

export const Container = styled.div`
  position: relative;
  z-index: 2;
  height: 100vh;
  text-align: center;
`;

export const Content = styled.div`
  padding: 0 4%;

  > p {
    font-size: 1.1rem;
    margin: 0 auto;
    margin-bottom: 24px;
    max-width: 540px;
    width: 80%;
    font-weight: normal;
  }
`;

export const Title = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 40px;
`;
