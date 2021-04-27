import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Routs from "./components/routs/Routs";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main>
        <Router>
          <HeaderMenu items={[["Login", "/"]]} />
          <Routs />
        </Router>
      </main>
    );
  }
}

export default App;
