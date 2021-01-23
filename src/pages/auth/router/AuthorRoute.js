import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { isAutheticated } from "./index";

const AuthorRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        /*isAutheticated() && isAuthor*/
        true ? (
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

export default AuthorRoute;
