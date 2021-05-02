import React from "react";
import { Route, Switch } from "react-router-dom";
import Search from "../pages/Search/Search";
import SearchResults from "../pages/Search/SearchResults/SearchResults";

const Routs = () => {
  return (
    <Switch>
      <Route path="/" exact component={Search} />
      <Route path="/searchResults" exact component={SearchResults} />
    </Switch>
  );
};

export default Routs;
