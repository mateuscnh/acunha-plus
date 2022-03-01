import useSwr from "@src/hooks/userSwr";
import React, { useState, createContext, useEffect } from "react";

export const SessionContext = createContext({});

export const SessionProvider = ({ children }) => {
  const [selectedMovieId, setSelectedMovieId] = useState();
  const [isShowMovieDetails, setIsShowMovieDetails] = useState(false);
  const [userLogged, setUserLogged] = useState();
  const [countInteractions, setCountInteractions] = useState(0);
  const [
    countRecommendationsInteractions,
    setCountRecommendationsInteractions,
  ] = useState(0);

  const { data: allInteractions } = useSwr(
    userLogged ? `/interactions/${userLogged?.id}` : null,
    undefined,
    { refreshInterval: 3 * 1000 }
  );

  const { data: allRecommendationsInteractions } = useSwr(
    userLogged?.isRecommendation
      ? `/recommendations/interactions/${userLogged?.id}`
      : null,
    undefined,
    { refreshInterval: 3 * 1000 }
  );

  useEffect(() => {
    if (allInteractions) {
      setCountInteractions(allInteractions?.length);
    }
  }, [allInteractions]);

  useEffect(() => {
    if (allRecommendationsInteractions) {
      setCountRecommendationsInteractions(
        allRecommendationsInteractions?.length
      );
    }
  }, [allRecommendationsInteractions]);

  useEffect(() => {
    const id = sessionStorage.getItem("acunha_plus_user_id");
    const name = sessionStorage.getItem("acunha_plus_user_name");
    const stepFinal = sessionStorage.getItem("acunha_plus_is_recommendation");
    const finished = sessionStorage.getItem("acunha_plus_is_finished");
    if (id && name) {
      setUserLogged({
        id: Number(id),
        name,
        isRecommendation: stepFinal === "true",
        isFinished: finished === "true",
      });
    }
  }, []);

  return (
    <SessionContext.Provider
      value={{
        userLogged,
        setUserLogged,
        selectedMovieId,
        setSelectedMovieId,
        isShowMovieDetails,
        setIsShowMovieDetails,
        countInteractions,
        setCountInteractions,
        countRecommendationsInteractions,
        setCountRecommendationsInteractions,
        allInteractions,
        allRecommendationsInteractions,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
