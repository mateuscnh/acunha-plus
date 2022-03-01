import styled from "styled-components";

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  z-index: 20;
  /* height: 60px; */
  width: 100%;
  background: ${(props) => props.theme.colors.black_dark};
`;

export const Content = styled.div`
  margin: 0 60px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 400px) {
    justify-content: center;
  }
`;

export const Progress = styled.div`
  width: 30%;
  min-width: 100px;
  opacity: 0.8;
  margin: 12px 0;

  .ant-progress-text {
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 400px) {
    width: 100%;
    margin-bottom: 24px;
  }
`;
