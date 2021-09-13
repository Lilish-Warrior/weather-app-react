import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="Weather">
      <form>
        <div className="input-group mb-3">
          <input
            type="search"
            className="form-control"
            placeholder="Enter a City"
            autoFocus="on"
            autoComplete="off"
          />
          <input
            className="btn btn-outline-secondary"
            type="submit"
            value="Search"
          />
        </div>
      </form>

      <hr className="line-dividing" />
      <h1>{weatherData.city}</h1>
      <div className="row">
        <div className="col-4">
          <ul>
            <li> {weatherData.date} </li>
            <li> {weatherData.description} </li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} k/h</li>
          </ul>
        </div>

        <div className="col-8">
          <div className="weather-temperature">
            <img src={weatherData.imgUrl} alt="Clear" className="icon" />
            <span className="bold-temperature">
              <strong>{weatherData.temperature}</strong>
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
