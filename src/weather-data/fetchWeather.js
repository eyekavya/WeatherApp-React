// "resolvedAddress": "Noida, UP, India",
// "address": "noida",
// "datetime": "2023-02-20",
// "tempmax": 89.5,
// "tempmin": 62.5,
// "temp": 74.4,
// "feelslike": 73.6,
// "humidity": 60.8,
// "conditions": "Partially cloudy",
// "icon": "partly-cloudy-day",

import { weather_api_key } from "../constants/appConfig";

export const fetchWeather = async (city) => {
  await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city
      .split(" ")
      .join("%20")}?key=${weather_api_key}`,
    {
      method: "GET",
    }
  ).then((res) => {
    res.text().then((txt) => {
      console.log(JSON.parse(txt));
      return JSON.parse(txt);
    });
  });
};
