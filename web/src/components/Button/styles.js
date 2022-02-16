import styled from "styled-components";

export const Button = styled.button`
  font-weight: bold;
  margin: 16px 0;
  text-transform: uppercase;

  width: 100%;
  height: 50px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.black_light : theme.colors.white};
  cursor: pointer;
  transition: 0.2s;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.black : theme.colors.primary};

  cursor: ${({ theme, disabled }) => disabled && "not-allowed"};
  :hover {
    background-color: ${({ theme, disabled }) =>
      !disabled && theme.colors.primary_dark};
  }
  :active {
    background-color: ${({ theme, disabled }) => theme.colors.primary_light};
  }
`;
