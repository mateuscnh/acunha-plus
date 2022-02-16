import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 80px;
  background: ${(props) => props.theme.colors.black_dark};
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${(props) => props.theme.colors.white};
`;
