import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppLogin from "../routes/Login";
import Navigation from "./Navigation";

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/">
        Home
        <Navigation />
      </Route>
      <Route path="/login">
        <Navigation />
        <AppLogin />
      </Route>
      <Route path="/users">
        Users
        <Navigation />
      </Route>
      <Route path="/items">
        Items
        <Navigation />
      </Route>
    </Router>
  );
};

export default AppRouter;
