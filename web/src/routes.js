import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Identification from "./pages/Identification";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact element={<Identification />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
