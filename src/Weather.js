import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Loader from "react-loader-spinner";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].id,
      coordinates: response.data.coord,
      latitude: response.data.coord.lat,
      longitude: response.data.coord.lon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function storeCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=98269c6efc2a2e14e6b32d6e0cd4f076&units=metric`;
    axios.get(apiURL).then(displayWeather);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row mb-3 form">
        <div className="col-8">
          <input
            type="search"
            className="form-control"
            placeholder="Search a City..."
            autoFocus="on"
            autoComplete="off"
            onChange={storeCity}
          />
        </div>
        <div className="col-4">
          <input
            className="btn btn-outline-custom"
            type="submit"
            value="Search"
          />
        </div>
      </div>
    </form>
  );

  if (weatherData.ready) {
    return (
      <div className="Weather">
        {form}
        <hr className="line-dividing" />
        <h1>{weatherData.city}</h1>
        <WeatherInfo data={weatherData} />
        <hr className="line-dividing" />
        <WeatherForecast
          latitude={weatherData.latitude}
          longitude={weatherData.longitude}
        />
      </div>
    );
  } else {
    search();
    return <Loader type="ThreeDots" color="#a662ff" height={100} width={100} />;
  }
}
