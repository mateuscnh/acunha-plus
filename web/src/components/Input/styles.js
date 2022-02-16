import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;

  margin-top: 30px;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: 18px;
  position: absolute;
  top: 10px;
  left: 16px;
  pointer-events: none;
  transition: 0.2s;
`;

export const StyledInput = styled.input`
  padding: 18px;
  width: 100%;
  height: 50px;
  border: 2px solid ${(props) => props.theme.colors.secondary};

  border-radius: 6px;
  color: ${(props) => props.theme.colors.primary};
  font-size: 18px;
  transition: 0.2s;
  :focus {
    border: 2px solid ${(props) => props.theme.colors.secondary};
    border-top: none;
  }
  :focus + ${Label} {
    transform: scale(0.8) translate(-10px, -44px);
  }
  ${({ hasValue }) =>
    hasValue &&
    css`
      & {
        border-top: none;
      }
      & + ${Label} {
        transform: scale(0.8) translate(-10px, -44px);
      }
    `}
`;
