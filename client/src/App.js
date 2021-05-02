import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Routs from "./components/routs/Routs";
import "./App.css";
import Accessibility from './components/accessibility/Accessibility';

class App extends Component {
  render() {
    return (
      <div id="my-App" className="my-text w-40 h-40" >
        <main>
        {/* <Accessibility/> */}
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
      </div>
    );
  }
}

export default App;
