import React from "react";
import "./Result.css";
import WeatherImage from "./WeatherImage";
const Result = (props) => {
  const {
    city,
    date,
    err,
    pressure,
    sunrise,
    sunset,
    wind,
    temp,
    main,
  } = props.weather;
  let content = null;
  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <div>
        <WeatherImage main={main} />
        <h1>
          Wynik dla miasta <em>{city}</em>
        </h1>
        <h2>
          Z dnia <strong>{date}</strong>
        </h2>
        <p>
          Ciśnienie: <strong>{pressure}hPa</strong>
        </p>
        <p>
          Wschód słońca <strong>{sunriseTime}</strong>
        </p>
        <p>
          Zachód słońca <strong>{sunsetTime}</strong>
        </p>
        <p>
          Aktualna siła wiatru <strong>{wind} m/s</strong>
        </p>
        <p>
          Temperatura <strong>{temp}°C</strong>
        </p>
      </div>
    );
  }
  return (
    <div className="result">
      {err ? (
        <p>
          Nie mamy w bazie <strong>{city}</strong>
        </p>
      ) : (
        content
      )}
    </div>
  );
};

export default Result;
