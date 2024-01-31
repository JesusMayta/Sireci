import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { UserRoute } from "./UseRoute";
// import HomeRouter from "./HomeRouter";
import Register from "../pages/Register";
import Login from "../pages/Login";

const RoutersInit = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {/* <UserRoute path="/" component={HomeRouter} /> */}
        </Switch>
      </Router>
    </>
  );
};

export default RoutersInit;
