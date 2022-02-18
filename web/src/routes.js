import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Identification from "./pages/Identification";
import Home from "./pages/Home/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact element={<Identification />} />
      <Route path="/home" exact element={<Home />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
