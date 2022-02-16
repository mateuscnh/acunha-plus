import styled from "styled-components";
import background from "../../assets/images/background-identification.jpg";

export const Background = styled.div`
  background: no-repeat center url(${background});
  background-size: cover;
`;
export const Container = styled.div`
  height: 100vh;
  text-align: center;
`;

export const Content = styled.div`
  margin: 0 auto;

  > p {
    font-size: 0.9rem;
    margin: 24px 0;
    margin-bottom: 40px;
    text-align: left;
    max-width: 860px;
    width: 100%;
    font-weight: normal;
  }
`;

export const Title = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 40px;
`;
