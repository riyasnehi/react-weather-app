import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img src={props.data.iconUrl} alt="weather" class="float-left" />
            <div className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">° C</span>
            </div>
            <ul className="desc">
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div className="city">
            <h1>{props.data.city}</h1>
            <ul>
              <li className="text-capitalize">{props.data.description}</li>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              <li>February 24, 2022</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}