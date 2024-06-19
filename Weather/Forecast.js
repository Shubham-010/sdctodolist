import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  debugger;
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  return (
    <div>
      <h3 className="forecast-title fw-bold">Forecast</h3>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, i) => {
          return (
            <AccordionItem key={i}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      className="img-fluid ac-icon"
                      src={`images/icons/${item.weather[0]?.icon}.png`}
                      alt="weather"
                    />
                    <label className="day">{forecastDays[i]} </label>
                    <label className="description">
                      {item.weather[0]?.description}
                    </label>
                    <label className="min-max">
                      {Math.round(item.main.temp_min)}°C /{" "}
                      {Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="wrap-accor-item">
                  <div className="row">
                    <div className="col-12 col-sm-12 vol-md-6 col-lg-6">
                      <div className="d-flex justify-content-between">
                        <label className="fw-bold">Pressure</label>
                        <label className="text-secondary">
                          {item.main.pressure} hPa
                        </label>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 vol-md-6 col-lg-6">
                      <div className="d-flex justify-content-between">
                        <label className="fw-bold">Humidity</label>
                        <label className="text-secondary">
                          {item.main.humidity}%
                        </label>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 vol-md-6 col-lg-6">
                      <div className="d-flex justify-content-between">
                        <label className="fw-bold">Clouds</label>
                        <label className="text-secondary">
                          {item.clouds.all}%
                        </label>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 vol-md-6 col-lg-6">
                      <div className="d-flex justify-content-between">
                        <label className="fw-bold">Wind Speed</label>
                        <label className="text-secondary">
                          {item.main.speed} m/s
                        </label>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 vol-md-6 col-lg-6">
                      <div className="d-flex justify-content-between">
                        <label className="fw-bold">Sea Level</label>
                        <label className="text-secondary">
                          {item.main.sea_level} m
                        </label>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 vol-md-6 col-lg-6">
                      <div className="d-flex justify-content-between">
                        <label className="fw-bold">Feels Likes</label>
                        <label className="text-secondary">
                          {item.main.feels_like} m
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Forecast;
