import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Routs from "./components/routs/Routs";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main>
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
          }}
        >
          <Router>
            <HeaderMenu items={[["", ""]]} />
            <div style={{ flex: "1" }}>
              <Routs />
            </div>
          </Router>
        </div>
      </main>
    );
  }
}

export default App;
