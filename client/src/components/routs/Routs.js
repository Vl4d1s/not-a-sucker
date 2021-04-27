import React from "react";
import { Route, Switch } from "react-router-dom";
import Search from "../pages/Search/Search";

const Routs = () => {
  return (
    <Switch>
      <Route path="/" exact component={Search} />
    </Switch>
  );
};

export default Routs;
