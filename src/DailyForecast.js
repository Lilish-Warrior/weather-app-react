import React from "react";
import Icons from "./Icons";
import "./DailyForecast.css";

export default function DailyForecast(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="daily-forecast">
      <div>{day()}</div>
      <div>
        <Icons code={props.data.weather[0].id} />{" "}
      </div>
      <div>
        <span className="forecast-max">{maxTemperature()}</span>
        <span className="forecast-min"> {minTemperature()}</span>
      </div>
    </div>
  );
}
