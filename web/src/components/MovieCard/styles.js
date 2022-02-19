import styled from "styled-components";

export const Image = styled.img`
  height: 100%;
  object-fit: contain;

  cursor: pointer;

  transition: 0.2s;
  border-radius: 6px;
  border: 1px solid transparent;
  box-shadow: -2px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-color: ${({ isDetailsVisible, theme }) =>
    isDetailsVisible && theme.colors.primary};

  :hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
