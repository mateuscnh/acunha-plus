import { useContext, useEffect, useMemo, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import * as S from "./styles";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import PopularMovieCard from "../PopularMovieCard/index";
import { SessionContext } from "@src/store/SessionProvider";

const PopularMoviesCarousel = ({ data }) => {
  const { isShowMovieDetails } = useContext(SessionContext);
  const [swiper, setSwiper] = useState();

  useEffect(() => {
    if (!isShowMovieDetails && swiper) {
      swiper.autoplay.start();
    }
  }, [isShowMovieDetails, swiper]);

  const swiperSettings = useMemo(
    () => ({
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 8 * 1000,
        disableOnInteraction: false,
      },
      speed: 600,
      pagination: {
        clickable: true,
      },
      onClick: (swiper) => {
        setSwiper(swiper);
        swiper.autoplay.stop();
      },
      modules: [Autoplay, Pagination, Navigation],
    }),
    []
  );

  return (
    <S.Container>
      <Swiper {...swiperSettings}>
        {data?.movies?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <PopularMovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
};

export default PopularMoviesCarousel;
