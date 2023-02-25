import React from "react";

import clearDay from "../../images/forecast-icons/clear-day.png";
import clearNight from "../../images/forecast-icons/clear-night.png";
import cloudy from "../../images/forecast-icons/cloudy.png";
import fog from "../../images/forecast-icons/fog.png";
import hail from "../../images/forecast-icons/hail.png";
import partlyCloudyDay from "../../images/forecast-icons/partly-cloudy-day.png";
import partlyCloudyNight from "../../images/forecast-icons/partly-cloudy-night.png";
import rainSnowShowersDay from "../../images/forecast-icons/rain-snow-showers-day.png";
import rainSnowShowersNight from "../../images/forecast-icons/rain-snow-showers-night.png";
import rainSnow from "../../images/forecast-icons/rain-snow.png";
import rain from "../../images/forecast-icons/rain.png";
import showersDay from "../../images/forecast-icons/showers-day.png";
import showersNight from "../../images/forecast-icons/showers-night.png";
import sleet from "../../images/forecast-icons/sleet.png";
import snowShowersDay from "../../images/forecast-icons/snow-showers-day.png";
import snowShowersNight from "../../images/forecast-icons/snow-showers-night.png";
import snow from "../../images/forecast-icons/snow.png";
import thunderRain from "../../images/forecast-icons/thunder-rain.png";
import thunderShowersDay from "../../images/forecast-icons/thunder-showers-day.png";
import thunderShowersNight from "../../images/forecast-icons/thunder-showers-night.png";
import thunder from "../../images/forecast-icons/thunder.png";
import wind from "../../images/forecast-icons/wind.png";

function Forecast({ data }) {
  return (
    <>
      <div
        className="container d-flex flex-row justify-content-center align-items-center"
        style={{ margin: "8rem 0 0 0rem" }}
      >
        {/* <p
          className="lead"
          style={{ textAlign: "left", margin: "3rem 2rem 0 2rem" }}
        >
          Forecast
        </p> */}
        {data?.days.map((e) => {
          return (
            <div
              style={{
                fontSize: "18px",
                color: "#fff",
                borderRight: "0.1px solid rgb(255 255 255 / 56%)",
                padding: "1rem",
                width: "max-content",
              }}
            >
              <div style={{ fontSize: "15px" }}>{e?.datetime}</div>
              <img
                src={clearDay}
                alt=""
                style={{ width: "36px", padding: "5px 0" }}
              />
              <div style={{ fontSize: "15px" }}>
                {(((e?.temp - 32) * 5) / 9).toFixed(2)}&deg;
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Forecast;
