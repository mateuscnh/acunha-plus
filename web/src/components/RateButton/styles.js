import styled from "styled-components";

export const Container = styled.div`
  transition: opacity 0.2s;
  display: inline-flex;
  .ant-rate-star {
    font-size: 1.6rem;

    @media (max-width: 400px) {
      font-size: 1.2rem;
    }
  }
`;
