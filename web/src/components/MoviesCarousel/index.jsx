import { useCallback, useMemo, useRef } from "react";
import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import * as S from "./styles";

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

  const handleRightArrowVisibility = useCallback((swiper) => {
    const totalMovies = swiper.slides.length;
    const movieWidth = swiper.height / 1.3;
    const carouselWidth = swiper.width;

    const visibleMovies = Number((carouselWidth / movieWidth).toFixed());
    const isVisibleMoviesLessThanTotal = totalMovies <= visibleMovies;
    const isVisibleAllMovies =
      swiper.activeIndex + 1 + visibleMovies > totalMovies;

    const changeDisplay = (display) => {
      swiper.params.navigation.nextEl.style.display = display;
    };
    changeDisplay(
      isVisibleMoviesLessThanTotal || isVisibleAllMovies ? "none" : "flex"
    );
  }, []);

  const swiperSettings = useMemo(
    () => ({
      modules: [Navigation, A11y],
      allowTouchMove: false,
      onInit: (swiper) => {
        swiper.params.navigation.prevEl = elNavLeft.current;
        swiper.params.navigation.nextEl = elNavRight.current;
        handleLeftArrowVisibility(swiper);
        handleRightArrowVisibility(swiper);
        swiper.navigation.init();
        swiper.navigation.update();
      },
      preloadImages: true,
      onSlideChange: (swiper) => {
        handleLeftArrowVisibility(swiper);
        handleRightArrowVisibility(swiper);
      },
      slidesPerView: "auto",
      slidesPerGroupAuto: true,
      speed: 400,
      spaceBetween: 24,
    }),
    [handleLeftArrowVisibility, handleRightArrowVisibility]
  );

  return (
    <S.Container>
      <S.SectionHeader>
        <p>{data?.name}</p>
      </S.SectionHeader>

      <Swiper {...swiperSettings}>
        {data?.movies?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
        <Chevron ref={elNavLeft} direction="left" />
        <Chevron ref={elNavRight} direction="right" />
      </Swiper>
    </S.Container>
  );
};

export default MoviesCarousel;
