import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <Weather />
        <footer>
          <a href="https://github.com/Lilish-Warrior/weather-app-react">
            Open source code
          </a>{" "}
          by <a href="https://github.com/Lilish-Warrior">Lilish Warrior </a>
        </footer>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
