import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { SessionContext } from "@src/store/SessionProvider";

const RoutePrivate = ({ component: Component, ...rest }) => {
  const { token } = useContext(SessionContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default RoutePrivate;
