import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppLogin from "../routes/Login";
import Navigation from "./Navigation";
import Pictures from "./Pictures";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn ? <Navigation /> : <AppLogin />}
      <Switch>
        <>
          <Route exact path="/">
            Home
            <Pictures />
          </Route>
          <Route path="/login"></Route>
          <Route path="/users">Users</Route>
          <Route path="/items">Items</Route>
        </>
      </Switch>
    </Router>
  );
};

export default AppRouter;
