import styled from "styled-components";

export const Image = styled.img`
  height: 100%;
  object-fit: contain;

  cursor: pointer;

  transition: 0.2s;
  border-radius: 6px;
  border: 1px solid transparent;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  border-color: ${({ isDetailsVisible, theme }) =>
    isDetailsVisible && theme.colors.primary};

  :hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.01) translateY(6px);
  }

  filter: ${({ disabled }) => disabled && "grayscale(100%)"};
  opacity: ${({ disabled }) => disabled && 0.3};
`;
