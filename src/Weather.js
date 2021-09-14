import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [statement, setStatement] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function displayWeather(response) {
    setStatement(true);
    console.log(response.data);
    setWeatherData({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      feels: Math.round(response.data.main.feels_like),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(city);
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=98269c6efc2a2e14e6b32d6e0cd4f076&units=metric`;
    axios.get(apiURL).then(displayWeather);
  }

  function storeCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <div className="col-10">
          <input
            type="search"
            className="form-control"
            placeholder="Search a City..."
            autoFocus="on"
            autoComplete="off"
            onChange={storeCity}
          />
        </div>
        <div className="col-2">
          <input
            className="btn btn-outline-custom"
            type="submit"
            value="Search"
          />
        </div>
      </div>
    </form>
  );

  if (statement) {
    return (
      <div className="Weather">
        {form}
        <hr className="line-dividing" />
        <h1>{weatherData.city}</h1>
        <div className="row">
          <div className="col-4">
            <ul>
              <li>Feels like: {weatherData.feels}°C </li>
              <li> {weatherData.description} </li>
              <li>Humidity: {weatherData.humidity}%</li>
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
  } else {
    return <div className="Weather">{form}</div>;
  }
}
