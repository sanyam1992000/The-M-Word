import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/admindashboard/Dashboard";
import Login from "./pages/auth/Login";
import { PrivateRoute, AuthorRoute } from "./pages/auth/router";
import Competitive from "./pages/competitive/Competitive";
import Home from "./pages/home/Home";
import MachineLearning from "./pages/machinelearning/MachineLearning";
import Miscellaneous from "./pages/miscellaneous/Miscellaneous";
import Mobile from "./pages/mobile/Mobile";
import CreateBlog from "./pages/blog/CreateBlog";
import Webdev from "./pages/webdev/Webdev";
import Editor from "./pages/blog/Editor";

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
        {/* <Route
          path="/:blogid"
          render={(props) => {
            return {
              //TODO:
            };
          }}
        /> */}
        <PrivateRoute path="/admin" exact component={Dashboard} />
        <PrivateRoute
          path="/admin/create-new-blog"
          exact
          component={CreateBlog}
        />
        <AuthorRoute path="/admin/edit/:blogid" component={Editor} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
