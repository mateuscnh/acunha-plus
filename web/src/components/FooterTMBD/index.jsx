import React from "react";

import * as S from "./styles";
import { Button } from "antd";

import { ReactComponent as TmdbLogo } from "@assets/icons/logo-tmdb.svg";

function FooterTMBD() {
  return (
    <S.Container>
      <p>Dados dos filmes, fornecidos por</p>
      <a
        href="https://www.themoviedb.org/"
        target="_blank"
        alt="TMDB"
        rel="noreferrer"
      >
        <TmdbLogo />
      </a>
    </S.Container>
  );
}

export default FooterTMBD;
