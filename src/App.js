import React from "react";
import "./App.css";
// import CardContent from "./components/Card";
import Data from "./components/data";
// import Image from "./components/Image";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      {/* <CardContent /> */}
      <Data />
      {/* <Image /> */}
    </div>
  );
}

export default App;
