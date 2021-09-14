import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App mt-3 wrapper">
      <Weather />
      <footer>
        <a href="https://github.com/Lilish-Warrior/weather-app-react">
          Open source code
        </a>{" "}
        by <a href="https://github.com/Lilish-Warrior">Lilish Warrior </a>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
