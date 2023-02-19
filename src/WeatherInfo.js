import React from "react";

import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>
            <span className="col-1"></span>
            <span class="temperature" id="actual-temperature">
              {Math.round(props.weather.main.temp)}
            </span>
            <span class="unit">°C</span>
          </h1>
          <li id="tempDeets">
            <div>
              Humidity:{" "}
              <strong>
                <span id="humidity">{props.weather.main.humidity}</span>%
              </strong>
            </div>
            Wind:{" "}
            <strong>
              <span id="wind">{props.weather.wind.speed}</span>
              km/h
            </strong>
          </li>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-8">
          <div class="city-container d-flex justify-content-end">
            <div>
              <span class="city" id="city">
                {props.weather.name}
              </span>
              <ul>
                <li class="info">
                  <div id="description">
                    {props.weather.weather[0].description}
                  </div>

                  <div id="date">Thursday, 12:40 PM</div>
                  <div id="day">November 9, 2022</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
