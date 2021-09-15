import React from "react";
import FormatedDate from "./FormatedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-4">
          <ul>
            <li>
              <FormatedDate date={props.data.date} />
            </li>
            <li>Feels like: {props.data.feels}°C </li>
            <li className="text-capitalize"> {props.data.description} </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} k/h</li>
          </ul>
        </div>

        <div className="col-8">
          <div className="weather-temperature">
            <img
              src={props.data.imgUrl}
              alt={props.data.description}
              className="icon"
            />
            <span className="bold-temperature">
              <strong>{props.data.temperature}</strong>
            </span>
            <span className="units">
              <a href="/" className="active">
                °C{" "}
              </a>
              |<a href="/">°F</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
