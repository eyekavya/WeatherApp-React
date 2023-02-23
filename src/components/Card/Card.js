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
// new Date().toDateString();
// new Date().toDateString()

import React from "react";
import { StyledCard } from "./StyledCard";

function Card({ data }) {
  console.log(data);

  return (
    <StyledCard>
      <div className="container">
        <div className="card">
          <div className="d-flex flex-row justify-content-around">
            <div className="d-flex flex-column">
              <div className="p-2">
                <div>{data?.resolvedAddress}</div>
                <div> {data?.days[0]?.datetime}</div>
              </div>
              <div className="p-2">
                <div></div>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <div className="p-2">Flex item 1</div>
            </div>
          </div>
        </div>

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
