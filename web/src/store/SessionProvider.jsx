import React, { useState, createContext, useEffect } from "react";

export const SessionContext = createContext({});

export const SessionProvider = ({ children }) => {
  const [selectedMovieId, setSelectedMovieId] = useState();
  const [isShowMovieDetails, setIsShowMovieDetails] = useState(false);
  const [userLogged, setUserLogged] = useState();

  useEffect(() => {
    const id = sessionStorage.getItem("acunha_plus_user_id");
    const name = sessionStorage.getItem("acunha_plus_user_name");
    if (id && name) {
      setUserLogged({
        id: Number(id),
        name,
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
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
