import React from "react";
import { Route, Redirect } from "react-router-dom";

const UserPrivateRoute = ({ component: Component, ...rest }) => {
  function hasPermission() {
    if (
      localStorage.getItem("auth_token") != undefined ||
      localStorage.getItem("auth_token") != null 
    ) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        hasPermission() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/user/login" />
        )
      }
    />
  );
};

export default UserPrivateRoute;
