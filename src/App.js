import React, { useState } from "react";
import background from "./background.jpg";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import SearchInput from "./components/SearchInput/SearchInput";
import clear from "./images/clear-day.png";
import cloudy from "./images/cloudy.png";
import partlyCloudy from "./images/partly-cloudy-day.png";
import rain from "./images/rain.png";
import fog from "./images/fog.png";
import snow from "./images/snow.png";
import wind from "./images/wind.png";

function App() {
  const [data, setData] = useState();
  const [imageUrl, setImageUrl] = useState();

  const updateData = (data) => {
    setData(data);
    if (data?.days[0]?.icon === "clear-day") {
      setImageUrl(clear);
    } else if (data?.days[0]?.icon === "cloudy") {
      setImageUrl(cloudy);
    } else if (data?.days[0]?.icon === "partly-cloudy-day") {
      setImageUrl(partlyCloudy);
    } else if (data?.days[0]?.icon === "rain") {
      setImageUrl(rain);
    } else if (data?.days[0]?.icon === "fog") {
      setImageUrl(fog);
    } else if (data?.days[0]?.icon === "wind") {
      setImageUrl(wind);
    } else {
      setImageUrl(snow);
    }
  };

  return (
    <>
      <div
        className="img-fluid"
        style={{
          backgroundImage: `url(${background})`,
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <SearchInput updateData={updateData} />
        <Card data={data} imageUrl={imageUrl} />
      </div>
    </>
  );
}

export default App;
