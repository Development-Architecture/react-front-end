import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserIndexHome from "../pages/home/view/indexPage";
import UserLogin from "../pages/auth/userLogin";
import UserList from "../pages/admin/userList/view/index";
import AdminLogin from "../pages/auth/adminLogin";
import AdminPrivateRoute from "./adminPrivateRoute";
import UserPrivateRoute from './userPrivateRoute'

export default function Routes() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
        {/* UserIndexHome */}
          <Route exact path="/" component={UserLogin} />
          <Route exact path="/user/login" component={UserLogin} />
          <Route exact path="/admin/login" component={AdminLogin} />
          <UserPrivateRoute
            component={UserIndexHome}
            path="/images"
            exact
          />

          {/* admin route */}
          <AdminPrivateRoute
            component={UserList}
            path="/admin/users"
            exact
          />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
