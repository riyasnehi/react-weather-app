import { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

function Weather() {
  let [city, setCity] = useState("Paris");
  let [weather, setWeather] = useState(17);

  function handleCity(event) {
    event.preventDefault();
    let apiKey = `9cb72bec958f8fb02391985ed7b219d2`;
    let units = `metric`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showWeather);
  }

  function showWeather(response) {
    setWeather(response.data);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="Weather">
          <form onSubmit={handleCity}>
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  placeholder="Enter a city"
                  class="form-control search-input"
                  onChange={updateCity}
                />
              </div>
              <div class="col-4">
                <input
                  type="submit"
                  value="Search"
                  class="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <WeatherInfo weather={weather} />
        </div>
      </div>
    </div>
  );
}

export default Weather;
