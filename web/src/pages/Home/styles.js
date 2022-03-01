import styled, { keyframes } from "styled-components";

const finished = keyframes`
  to {
    opacity: 1
  }
`;

export const Container = styled.div`
  padding-bottom: 60px;
  opacity: 0;
  animation: ${finished} 0.3s forwards;
`;
