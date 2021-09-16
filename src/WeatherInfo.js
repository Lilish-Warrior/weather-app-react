import React from "react";
import FormatedDate from "./FormatedDate";
import Icons from "./Icons";
import TemperatureConvertion from "./TemperatureConvertion";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="icon">
        <Icons code={props.data.icon} />
      </div>
      <div className="weather-temperature">
        <TemperatureConvertion celsius={props.data.temperature} />
      </div>
      <div>
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
    </div>
  );
}
