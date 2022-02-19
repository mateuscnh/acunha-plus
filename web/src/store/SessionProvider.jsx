import useSwr from "@src/hooks/userSwr";
import api from "@src/services/api";
import React, { useState, createContext, useCallback, useMemo } from "react";

export const SessionContext = createContext({});

const userLogged = {
  id: 1,
  name: "Mateus",
};

export const SessionProvider = ({ children }) => {
  const [selectedMovieId, setSelectedMovieId] = useState();
  const [isShowMovieDetails, setIsShowMovieDetails] = useState(false);

  const { data: interactions, mutate: mutateInteractions } = useSwr(
    `/interactions/${userLogged?.id}`
  );

  const postInteraction = useCallback(
    (payload) => api.post("/interactions", payload),
    []
  );
  const putInteraction = useCallback(
    (payload) => api.put(`/interactions/${payload?.id}`, payload),
    []
  );

  const watchedMovies = useMemo(
    () => interactions?.map(({ data }) => data),
    [interactions]
  );

  const selectedMovieInteraction = useMemo(
    () =>
      interactions?.find(
        (oldInteraction) => oldInteraction.movie_id === selectedMovieId
      ),
    [interactions, selectedMovieId]
  );

  const handleInteraction = useCallback(
    async (data) => {
      const newInteraction = {
        ...data,
        user_id: userLogged.id,
        movie_id: selectedMovieId,
      };

      const hasId = !!newInteraction?.id;

      if (hasId) {
        await putInteraction(newInteraction);
        mutateInteractions([
          ...interactions?.map((interaction) =>
            interaction.id === newInteraction.id ? newInteraction : interaction
          ),
        ]);
      } else {
        const {
          data: { id },
        } = await postInteraction(newInteraction);
        mutateInteractions([...interactions, { id, ...newInteraction }]);
      }
    },
    [
      interactions,
      selectedMovieId,
      postInteraction,
      mutateInteractions,
      putInteraction,
    ]
  );

  return (
    <SessionContext.Provider
      value={{
        selectedMovieId,
        selectedMovieInteraction,
        setSelectedMovieId,
        isShowMovieDetails,
        setIsShowMovieDetails,
        interactions,
        handleInteraction,
        userLogged,
        watchedMovies,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
