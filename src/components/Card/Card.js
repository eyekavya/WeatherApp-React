import React from "react";
import { StyledCard } from "./StyledCard";

function Card() {
  return (
    <StyledCard>
      <div class="container">
        <div class="card"></div>

        <div class="drops">
          <div class="drop drop-1"></div>
          <div class="drop drop-2"></div>
          <div class="drop drop-3"></div>
          <div class="drop drop-4"></div>
          <div class="drop drop-5"></div>
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;
