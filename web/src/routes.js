import React, { useContext, useMemo } from "react";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";

import Identification from "./pages/Identification";
import Home from "./pages/Home/";
import Recommendations from "./pages/Recommendations";

import { SessionContext } from "./store/SessionProvider";
import PrivateRoute from "./components/PrivateRoute/index";

const Routes = () => {
  const { userLogged } = useContext(SessionContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          element={
            <PrivateRoute
              condition={userLogged && !userLogged?.isRecommendation}
              navigateTo={"/identification"}
            >
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/recommendations"
          exact
          element={
            <PrivateRoute condition={userLogged?.isRecommendation}>
              <Recommendations />
            </PrivateRoute>
          }
        />
        <Route
          path="/identification"
          exact
          element={
            <PrivateRoute
              condition={!userLogged}
              navigateTo={
                userLogged?.isRecommendation ? "/recommendations" : "/"
              }
            >
              <Identification />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<Navigate to={userLogged ? "/" : "/identification"} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
