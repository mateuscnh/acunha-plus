import styled from "styled-components";

export const Container = styled.div`
  margin: 32px 0;
  .swiper-slide {
    margin-bottom: 32px;
    width: auto;
    height: 220px;

    &:first-child {
      margin-left: 60px;
    }
    &:last-child {
      margin-right: 60px;
    }
    @media (min-width: 400px) {
      height: 300px;
    }
  }
`;

export const SectionHeader = styled.header`
  padding: 0 60px;
  p {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 1.2rem;
    @media (max-width: 400px) {
      font-size: 1rem;
    }
  }
`;
