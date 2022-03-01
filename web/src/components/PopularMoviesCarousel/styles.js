import styled from "styled-components";

export const Container = styled.div`
  margin: 60px;
  overflow: hidden;
  transition: 0.2s;
  border-radius: 8px;
  border: 1px solid transparent;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  border-color: ${({ isDetailsVisible, theme }) =>
    isDetailsVisible && theme.colors.primary};

  cursor: pointer;

  :hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.01) translateY(6px);
  }

  @media (max-width: 1000px) {
    margin: 0;
    width: 100%;
    border: none;
    border-radius: 0 0 12px 12px;
  }
`;
