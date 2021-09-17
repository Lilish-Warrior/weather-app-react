import React from "react";
import "./WeatherForecast.css";
import Icons from "./Icons";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let longitude = props.coord.lon;
  let latitude = props.coord.lat;
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=98269c6efc2a2e14e6b32d6e0cd4f076&units=metric`;
  axios.get(apiURL).then(handleResponse);

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
