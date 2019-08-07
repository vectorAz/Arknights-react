import React, { Component } from "react";
import { BrowserRouter, Route,Switch,Redirect } from "react-router-dom";
import Login from "./pages/login/login.jsx";
import Admin from "./pages/admin/Admin.jsx";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login"  component={Login} />
          <Route path="/admin"  component={Admin} />
          <Redirect to='/login'></Redirect>
        </Switch>
      </BrowserRouter>
    );
  }
}
