import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "../pages/Profile";

const HomeRouter = () => {
  return (
    <Switch>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/*" component={Profile} />
    </Switch>
  );
};

export default HomeRouter;
