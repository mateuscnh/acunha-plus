import styled, { keyframes } from "styled-components";

const finished = keyframes`
  to {
    opacity: 1
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  opacity: 0;
  animation: ${finished} 0.3s forwards;
  > img {
    margin: 16px;
    height: 260px;
  }
`;

export const Content = styled.div`
  max-width: 56%;
  h1 {
    font-size: 2rem;
  }
  p {
    font-weight: 400;
    opacity: 0.6;
  }

  strong {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 6px;
  }

  span {
    margin: 0 6px;
    opacity: 0.4;
    cursor: pointer;
  }
`;

export const ContainerFinished = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
  opacity: 0;
  animation: ${finished} 1s forwards;

  footer {
    height: 60px;
    position: absolute;
    bottom: 0;

    margin-top: 4px;
    font-size: 1.4rem;
    a {
      margin: 10px;
      transition: 0.2s;
      :hover {
        opacity: 0.5;
      }
    }
  }
`;
