import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
