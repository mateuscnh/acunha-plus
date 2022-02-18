import React, { useEffect, useState } from "react";
import useSwr from "@src/hooks/userSwr";
import SpinPage from "@src/components/SpinPage";
import MoviesCarousel from "@src/components/MoviesCarousel/index";

import * as S from "./styles";

const Home = () => {
  const [isPageFullyLoaded, setIsPageFullyLoaded] = useState(false);

  const { data } = useSwr("/movies");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageFullyLoaded(true);
    }, 1 * 500);

    return () => clearTimeout(timer);
  }, []);

  if (!data || !isPageFullyLoaded) {
    return <SpinPage />;
  }

  return (
    <S.Container>
      {data
        ?.filter((genre) => genre.movies?.length > 6)
        .map(
          ({ id, name, movies }) =>
            movies.length > 0 && (
              <MoviesCarousel key={id} data={{ name, movies }} />
            )
        )}
    </S.Container>
  );
};

export default Home;
