import React, { useCallback, useContext, useEffect } from "react";
import useSwr from "@src/hooks/userSwr";
import SpinPage from "@src/components/SpinPage";

import * as S from "./styles";
import MovieDetails from "@src/components/MovieDetails/index";
import { SessionContext } from "@src/store/SessionProvider";
import MovieCard from "@src/components/MovieCard/index";
import Footer from "@src/components/Footer/index";
import { Tooltip, notification } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Recommendations = () => {
  const {
    userLogged,
    setSelectedMovieId,
    setIsShowMovieDetails,
    allRecommendationsInteractions,
  } = useContext(SessionContext);

  const { data } = useSwr(`/recommendations?user_id=${userLogged?.id}`);

  const handleCloseModal = useCallback(() => {
    setSelectedMovieId(undefined);
    setIsShowMovieDetails(false);
  }, [setIsShowMovieDetails, setSelectedMovieId]);

  const openNotification = useCallback(() => {
    notification.open({
      message: "Veja o que temos para você!",
      duration: 15,
      onClose: () => notification.destroy(),
      description: (
        <p>
          Avalie as recomendações que o sistema gerou a partir de suas escolhas.
        </p>
      ),
    });
  }, []);

  useEffect(() => {
    if (!userLogged?.isFinished) {
      openNotification();
    }
  }, [openNotification, userLogged?.isFinished]);

  if (!data) {
    return <SpinPage />;
  }

  if (!userLogged?.isFinished) {
    return (
      <S.Container>
        {data?.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            allInteractions={allRecommendationsInteractions}
          />
        ))}

        <MovieDetails handleCancel={handleCloseModal} />
        <Footer recommendationsTotal={data?.length} />
      </S.Container>
    );
  }

  return (
    <S.ContainerFinished>
      <S.Content>
        <h1>Obrigado!</h1>
        <p>
          As suas recomendações foram realizadas a partir de algoritmos
          utilizados em sistemas de recomendação, aplicando
          <strong>
            filtragem colaborativa
            <Tooltip
              title="Itens recomendados de acordo com itens avaliados por outros
            usuários"
            >
              <InfoCircleOutlined />
            </Tooltip>
          </strong>
          e
          <strong>
            filtragem baseada em conteúdo
            <Tooltip
              title="Itens recomendados a partir das características, neste experimento
              foram utilizados os gêneros dos filmes"
            >
              <InfoCircleOutlined />
            </Tooltip>
          </strong>
        </p>
      </S.Content>
      <footer>
        <Tooltip title="Github">
          <a
            href="https://github.com/mateuscnh"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub />
          </a>
        </Tooltip>
        <Tooltip title="Linkedin">
          <a
            href="https://www.linkedin.com/in/mateuscnh/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </Tooltip>
      </footer>
    </S.ContainerFinished>
  );
};

export default Recommendations;
