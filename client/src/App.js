import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Routs from "./components/routs/Routs";
import "./App.css";
import AccessbilityMenu from "./components/HeaderMenu/AccessabilityMenu/AccessabilityMenu";
// Redux
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div id="main"  className="main">
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
          }}
        >
          <AccessbilityMenu />
          <Router>
          <div id="my-App" className="cursor">
          
            <HeaderMenu items={[["", ""]]} />
            <div style={{ flex: "1" }}>
              <Routs />
             
            </div>
            </div>
          </Router>
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;