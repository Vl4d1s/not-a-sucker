import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routs from "./components/routs/Routs";

function App() {
  return (
    <main>
      <Router>
        <Routs />
      </Router>
    </main>
  );
}

export default App;
