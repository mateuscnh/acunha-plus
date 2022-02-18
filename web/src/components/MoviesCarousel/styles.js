import styled from "styled-components";

export const Container = styled.div`
  margin: 32px 0;
  .swiper-slide {
    width: auto;
    height: 200px;

    &:first-child {
      margin-left: 60px;
    }
    &:last-child {
      margin-right: 60px;
    }
    @media (min-width: 400px) {
      height: 280px;
    }
  }
`;

export const SectionHeader = styled.header`
  padding: 0 60px;
  p {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 1.2rem;
  }
`;
