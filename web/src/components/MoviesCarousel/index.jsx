import { useCallback, useMemo, useRef } from "react";
import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import * as Styled from "./styles";

import MovieCard from "../MovieCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/less/free-mode";

import Chevron from "./Chevron/index";

const MoviesCarousel = ({ data }) => {
  const elNavLeft = useRef(null);
  const elNavRight = useRef(null);

  const handleLeftArrowVisibility = useCallback((swiper) => {
    const isInitialMovie = swiper.realIndex === 0;
    const changeDisplay = (display) =>
      (swiper.params.navigation.prevEl.style.display = display);
    changeDisplay(isInitialMovie ? "none" : "flex");
  }, []);

  const swiperSettings = useMemo(
    () => ({
      modules: [Navigation, A11y],
      allowTouchMove: false,
      onInit: (swiper) => {
        swiper.params.navigation.prevEl = elNavLeft.current;
        swiper.params.navigation.nextEl = elNavRight.current;
        // Default spacing on first card
        swiper.slides[0].style.marginLeft = "60px";
        handleLeftArrowVisibility(swiper);
        swiper.navigation.init();
        swiper.navigation.update();
      },
      preloadImages: true,
      onSlideChange: (swiper) => handleLeftArrowVisibility(swiper),
      slidesPerView: "auto",
      slidesPerGroupAuto: true,
      speed: 400,
      spaceBetween: 16,
    }),
    [handleLeftArrowVisibility]
  );

  return (
    <Styled.Container>
      <Styled.SectionHeader>
        <p>{data?.name}</p>
      </Styled.SectionHeader>

      <Swiper {...swiperSettings}>
        {data?.movies?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
        <Chevron ref={elNavLeft} direction="left" />
        <Chevron ref={elNavRight} direction="right" />
      </Swiper>
    </Styled.Container>
  );
};

export default MoviesCarousel;
