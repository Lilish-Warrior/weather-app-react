import React from "react";
import FormatedDate from "./FormatedDate";
import Icons from "./Icons";
import TemperatureConvertion from "./TemperatureConvertion";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="main-info">
        <div className="row">
          <div className="col-6">
            <span className="icon">
              <Icons code={props.data.icon} />
            </span>
          </div>
          <div className="col-6">
            <span className="weather-temperature">
              <TemperatureConvertion celsius={props.data.temperature} />
            </span>
          </div>
        </div>
      </div>

      <div>
        <ul>
          <li>
            <FormatedDate date={props.data.date} />
          </li>
          <li className="text-capitalize"> {props.data.description} </li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} k/h</li>
        </ul>
      </div>
    </div>
  );
}
