import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { SessionContext } from "@src/store/SessionProvider";

const RoutePrivate = ({ element: Element, ...rest }) => {
  const { userLogged } = useContext(SessionContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        userLogged ? (
          <Element {...props} />
        ) : (
          <Navigate to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default RoutePrivate;
