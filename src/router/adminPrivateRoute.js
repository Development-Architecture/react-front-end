import React from "react";
import { Route, Redirect } from "react-router-dom";

const AdminPrivateRoute = ({ component: Component, ...rest }) => {
  function hasPermission() {
    if (
      localStorage.getItem("auth_token") != undefined ||
      localStorage.getItem("auth_token") != null &&
      localStorage.getItem("is_admin_auth") != false
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
          <Redirect to="/admin/login" />
        )
      }
    />
  );
};

export default AdminPrivateRoute;
