import React, { useContext } from "react";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";

import Identification from "./pages/Identification";
import Home from "./pages/Home/index";
import { SessionContext } from "./store/SessionProvider";

const Routes = () => {
  const { userLogged } = useContext(SessionContext);

  return (
    <BrowserRouter>
      <Switch>
        {userLogged ? (
          <Route path="/" exact element={<Home />} />
        ) : (
          <Route path="/identification" exact element={<Identification />} />
        )}
        <Route
          path="*"
          element={<Navigate to={userLogged ? "/" : "/identification"} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
