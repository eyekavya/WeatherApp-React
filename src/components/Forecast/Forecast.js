import React, { useState } from "react";
import clearDay from "../../images/forecast-icons/clear-day.png";
import clearNight from "../../images/forecast-icons/clear-night.png";
import cloud from "../../images/forecast-icons/cloudy.png";
import foggy from "../../images/forecast-icons/fog.png";
import hail from "../../images/forecast-icons/hail.png";
import partlyCloudyDay from "../../images/forecast-icons/partly-cloudy-day.png";
import partlyCloudyNight from "../../images/forecast-icons/partly-cloudy-night.png";
import rainSnowShowersDay from "../../images/forecast-icons/rain-snow-showers-day.png";
import rainSnowShowersNight from "../../images/forecast-icons/rain-snow-showers-night.png";
import rainSnow from "../../images/forecast-icons/rain-snow.png";
import rainy from "../../images/forecast-icons/rain.png";
import showersDay from "../../images/forecast-icons/showers-day.png";
import showersNight from "../../images/forecast-icons/showers-night.png";
import sleet from "../../images/forecast-icons/sleet.png";
import snowShowersDay from "../../images/forecast-icons/snow-showers-day.png";
import snowShowersNight from "../../images/forecast-icons/snow-showers-night.png";
import snowy from "../../images/forecast-icons/snow.png";
import thunderRain from "../../images/forecast-icons/thunder-rain.png";
import thunderShowersDay from "../../images/forecast-icons/thunder-showers-day.png";
import thunderShowersNight from "../../images/forecast-icons/thunder-showers-night.png";
import thunder from "../../images/forecast-icons/thunder.png";
import windy from "../../images/forecast-icons/wind.png";

function Forecast({ data }) {
  function getIconUrl(e) {
    if (e.icon === "clear-day") {
      return clearDay;
    } else if (e.icon === "clear-night") {
      return clearNight;
    } else if (e.icon === "clear-night") {
      return clearNight;
    } else if (e.icon === "cloudy") {
      return cloud;
    } else if (e.icon === "fog") {
      return foggy;
    } else if (e.icon === "hail") {
      return hail;
    } else if (e.icon === "partly-cloudy-day") {
      return partlyCloudyDay;
    } else if (e.icon === "partly-cloudy-night") {
      return partlyCloudyNight;
    } else if (e.icon === "rain-snow-showers-day") {
      return rainSnowShowersDay;
    } else if (e.icon === "rain-snow-showers-night") {
      return rainSnowShowersNight;
    } else if (e.icon === "rain-snow") {
      return rainSnow;
    } else if (e.icon === "rain") {
      return rainy;
    } else if (e.icon === "showers-day") {
      return showersDay;
    } else if (e.icon === "showers-night") {
      return showersNight;
    } else if (e.icon === "sleet") {
      return sleet;
    } else if (e.icon === "snow-showers-day") {
      return snowShowersDay;
    } else if (e.icon === "snow-showers-night") {
      return snowShowersNight;
    } else if (e.icon === "snow") {
      return snowy;
    } else if (e.icon === "thunder-rain") {
      return thunderRain;
    } else if (e.icon === "thunder-showers-day") {
      return thunderShowersDay;
    } else if (e.icon === "thunder-showers-night") {
      return thunderShowersNight;
    } else if (e.icon === "thunder") {
      return thunder;
    } else {
      return windy;
    }
  }

  return (
    <>
      <div
        className="container d-flex flex-row justify-content-center align-items-center"
        style={{ marginTop: "8rem" }}
      >
        {data?.days.map((e, i) => {
          let date = new Date(e?.datetime);
          const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];
          let formatedDate =
            date.getDate().toString() + " " + months[date.getMonth()];

          const iconUrl = getIconUrl(e);
          return (
            i !== 0 && (
              <div
                style={{
                  padding: "0 1.2rem",
                  fontSize: "18px",
                  color: "#fff",
                  width: "max-content",
                  borderRight:
                    i !== 14 ? "0.1px solid rgb(255 255 255 / 56%)" : "none",
                }}
              >
                <div style={{ fontSize: "15px" }}>{formatedDate}</div>
                <img
                  src={iconUrl}
                  alt=""
                  style={{ width: "36px", padding: "5px 0" }}
                />
                <div style={{ fontSize: "15px" }}>
                  {(((e?.temp - 32) * 5) / 9).toFixed(0)}&deg;
                </div>
              </div>
            )
          );
        })}
      </div>
    </>
  );
}

export default Forecast;
