import React, { useCallback, useContext, useEffect, useMemo } from "react";
import Logo from "../Logo/index";
import { useNavigate } from "react-router";

import { Progress, notification } from "antd";
import * as S from "./styles";
import { SessionContext } from "@src/store/SessionProvider";
import Button from "../Button";

const Footer = ({ recommendationsTotal }) => {
  const {
    countInteractions,
    countRecommendationsInteractions,
    setUserLogged,
    userLogged,
  } = useContext(SessionContext);
  const navigate = useNavigate();

  const interactionsPercentage = useMemo(() => {
    const counter = userLogged?.isRecommendation
      ? countRecommendationsInteractions
      : countInteractions;
    const total = userLogged?.isRecommendation
      ? 100 / recommendationsTotal
      : 10;

    return Number(((counter ?? 0) * total).toFixed());
  }, [
    countRecommendationsInteractions,
    countInteractions,
    userLogged?.isRecommendation,
    recommendationsTotal,
  ]);

  const handleClickRecommendation = useCallback(() => {
    setUserLogged((userLogged) => ({
      ...userLogged,
      isRecommendation: true,
    }));
    notification.destroy();
    sessionStorage.setItem("acunha_plus_is_recommendation", "true");
    navigate("/recommendations");
  }, [navigate, setUserLogged]);

  const openHomeNotification = useCallback(() => {
    notification.open({
      message: "Concluído!",
      duration: 20,
      onClose: () => notification.destroy(),
      description: (
        <p>
          Você completou a avaliação de 10 filmes! Avalie quantos quiser, mas se
          preferir ir para o próximo passo, clique em{" "}
          <span>GERAR RECOMENDAÇÃO</span>, e veja o que temos pra você!
        </p>
      ),
    });
  }, []);

  useEffect(() => {
    if (interactionsPercentage === 100 && !userLogged?.isRecommendation) {
      openHomeNotification();
    }
  }, [
    interactionsPercentage,
    userLogged?.isRecommendation,
    openHomeNotification,
  ]);

  useEffect(() => {
    if (interactionsPercentage >= 100 && userLogged?.isRecommendation) {
      sessionStorage.setItem("acunha_plus_is_finished", "true");
      setUserLogged((oldUser) => ({
        ...oldUser,
        isFinished: true,
      }));
    }
  }, [
    interactionsPercentage,
    userLogged?.isRecommendation,
    recommendationsTotal,
    navigate,
    setUserLogged,
  ]);

  return (
    <S.Container>
      <S.Content>
        <Logo height="1.4rem" style={{ marginTop: 12 }} />
        {interactionsPercentage >= 100 && !userLogged?.isRecommendation ? (
          <Button
            type="primary"
            onClick={handleClickRecommendation}
            style={{ width: 220, height: 40, fontSize: "0.8rem" }}
          >
            GERAR RECOMENDAÇÃO
          </Button>
        ) : (
          <S.Progress>
            <Progress percent={interactionsPercentage} status="active" />
          </S.Progress>
        )}
      </S.Content>
    </S.Container>
  );
};

export default Footer;
