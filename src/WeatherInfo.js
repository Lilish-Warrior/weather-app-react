import React from "react";
import FormatedDate from "./FormatedDate";
import Icons from "./Icons";
import TemperatureConvertion from "./TemperatureConvertion";

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
            <div className="icon">
              <Icons code={props.data.icon} />
            </div>
            <TemperatureConvertion celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
