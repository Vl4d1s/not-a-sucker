import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Routs from "./components/routs/Routs";
import "./App.css";
import AccessbilityMenu from "./components/HeaderMenu/AccessabilityMenu/AccessabilityMenu";

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
          <AccessbilityMenu />
          <Router>
          <div id="my-App" className="my-text w-40 h-40">
            <HeaderMenu items={[["", ""]]} />
            <div style={{ flex: "1" }}>
              <Routs />
            </div>
            </div>
          </Router>
        </div>
      </main>

    );
  }
}

export default App;
