import React from "react";
import WeatherIcon from "react-icons-weather";

export default function Icons(props) {
  return (
    <div>
      <WeatherIcon
        name="owm"
        iconId={props.code}
        flip="horizontal"
        rotate="90"
      />
    </div>
  );
}
