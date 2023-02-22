import React from "react";
import { fetchWeather } from "../../weather-data/fetchWeather";
import { StyledCard } from "./StyledCard";

function Card() {
  return (
    <StyledCard>
      <div className="container">
        <div className="card"></div>

        <div className="drops">
          <div className="drop drop-1"></div>
          <div className="drop drop-2"></div>
          <div className="drop drop-3"></div>
          <div className="drop drop-4"></div>
          <div className="drop drop-5"></div>
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;
