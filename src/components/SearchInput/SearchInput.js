import React, { useState } from "react";
import { fetchWeather } from "../../weather-data/fetchWeather";
import { StyledSearchInput } from "./StyledSearchInput";

function SearchInput() {
  return (
    <StyledSearchInput>
      <div className="Card">
        <div className="CardInner">
          {/* <label>Search for a city</label> */}
          <div className="container">
            <div className="Icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#657789"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <div className="InputContainer">
              <input placeholder="Search for a city..." />
            </div>
          </div>
        </div>
      </div>
    </StyledSearchInput>
  );
}

export default SearchInput;
