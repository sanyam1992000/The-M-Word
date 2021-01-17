import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { isAutheticated } from "./index";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        /*isAutheticated()*/
        false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/admin/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
