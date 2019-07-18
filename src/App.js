import React from "react";
import "./App.css";
import Data from "./components/data";
import { Header } from "./components/StylizeWidgets";

function App() {
  return (
    <div className="App">
      <Header>
        <h1> Nasa's Astronomy Picture of the Day</h1>
      </Header>

      <Data />
    </div>
  );
}

export default App;
