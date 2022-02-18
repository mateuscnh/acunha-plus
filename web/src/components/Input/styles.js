import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-top: 40px;
  margin-bottom: 8px;
`;

export const Label = styled.label`
  position: absolute;
  top: 14px;
  left: 16px;
  pointer-events: none;
  transition: all 0.2s;
`;

const inputWithValueCSS = css`
  & {
    border-top: transparent;
    border-color: ${(props) => props.theme.colors.primary};
  }
  & + ${Label} {
    transform: scale(0.9) translate(-12px, -36px);
  }
`;

export const StyledInput = styled.input`
  padding: 16px;
  min-width: 100%;
  height: 50px;
  border: 1px solid ${(props) => props.theme.colors.black};

  border-radius: 4px;
  color: ${(props) => props.theme.colors.primary_light};
  font-size: 1rem;
  transition: all 0.2s;
  background: ${(props) => props.theme.colors.black_dark};
  :focus {
    border-top: transparent;
    border-color: ${(props) => props.theme.colors.primary};
  }
  :focus + ${Label} {
    transform: scale(0.9) translate(-12px, -36px);
  }
  ${({ value }) => value && inputWithValueCSS}
`;
