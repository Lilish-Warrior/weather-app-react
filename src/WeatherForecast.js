import React from "react";
import "./WeatherForecast.css";
import Icons from "./Icons";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <ul>
            <li>Thu</li>
            <li>
              {" "}
              <Icons code="500" />{" "}
            </li>
            <li>
              <span className="forecast-max">19°</span>
              <span className="forecast-min"> 5°</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
