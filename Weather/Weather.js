import React, { useState } from "react";
import "./Weather.scss";
import Search from "./Search";
import Currentweather from "./Currentweather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import Forecast from "./Forecast";

//! Step3: from search component it will go here
const Weather = () => {
  const [currentweather, setCurrentweather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    debugger;
    //! Step4: you will get data here
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        debugger;
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentweather({ weatherResponse, ...weatherResponse });
        setForecast({ forecastResponse, ...forecastResponse });
      })
      .catch((error) => console.log(error, "error in promise all"));
  };
  console.log(currentweather, "weather");
  console.log(forecast, "forecast");
  return (
    <div>
      <h1 className="display-6 text-center mb-4">Weather App</h1>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <Search onSearchChange={handleOnSearchChange} />
          {currentweather && <Currentweather data={currentweather} />}
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          {forecast && <Forecast data={forecast} />}
        </div>
      </div>
    </div>
  );
};

export default Weather;

//! npm i react-select-async-paginate --force beacuse of some warning issue
