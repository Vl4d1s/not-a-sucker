import React from "react";
import { Route, Switch } from "react-router-dom";
import Search from "../pages/Search/Search";
import Results from "../pages/Results/Results";

const Routs = () => {
  return (
    <Switch>
      <Route path="/" exact component={Search} />
      <Route path="/results" exact component={Results} />
    </Switch>
  );
};

export default Routs;
