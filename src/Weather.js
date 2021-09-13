import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=98269c6efc2a2e14e6b32d6e0cd4f076&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <Loader
      type="Puff"
      color="yellow"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
}
