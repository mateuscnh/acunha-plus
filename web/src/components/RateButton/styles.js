import styled from "styled-components";

export const Container = styled.div`
  transition: opacity 0.2s;
  opacity: ${({ disabled }) => disabled && 0.1};
  .ant-rate-star {
    font-size: 24px;
  }
`;
