import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Competitive from "./pages/competitive/Competitive";
import Home from "./pages/home/Home";
import MachineLearning from "./pages/machinelearning/MachineLearning";
import Miscellaneous from "./pages/miscellaneous/Miscellaneous";
import Mobile from "./pages/mobile/Mobile";
import Webdev from "./pages/webdev/Webdev";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/competitive" exact component={Competitive} />
        <Route path="/mobile" exact component={Mobile} />
        <Route path="/webdev" exact component={Webdev} />
        <Route path="/machinelearning" exact component={MachineLearning} />
        <Route path="/miscellaneous" exact component={Miscellaneous} />
        <Route path="/admin/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
