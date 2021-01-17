import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/admin/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
