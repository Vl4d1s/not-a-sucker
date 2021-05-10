import React from "react";
import { Route, Switch } from "react-router-dom";
import Search from "../pages/Search/Search";
import SearchResults from "../pages/Search/SearchResults/SearchResults";
import Results from "../pages/Results/Results";

const Routs = () => {
  return (
    <Switch>
      <Route path="/" exact component={Search} />
      <Route path="/searchResults" exact component={SearchResults} />
      <Route path="/results" exact component={Results} />
    </Switch>
  );
};

export default Routs;
