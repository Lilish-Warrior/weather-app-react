import React, { useState } from "react";

export default function TemperatureConvertion(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("farneheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === `celsius`) {
    return (
      <div>
        <span className="bold-temperature">
          <strong>{props.celsius}</strong>
        </span>
        <span className="units">
          <strong>°C</strong> |
          <a href="/" onClick={convertToFarenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let farenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span className="bold-temperature">
          <strong>{Math.round(farenheit)}</strong>
        </span>
        <span className="units">
          <a href="/" onClick={convertToCelsius}>
            °C{" "}
          </a>
          | <strong>°F</strong>
        </span>
      </div>
    );
  }
}
