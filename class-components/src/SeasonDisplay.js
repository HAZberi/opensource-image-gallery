import React from "react";
import "./SeasonDisplay.css";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) return lat > 0 ? "summer" : "winter";
  return lat > 0 ? "winter" : "summer";
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const displayText =
    season === "summer" ? "Lets Hit the Beach" : "Burr its Chilly";
  const displayIcon = season === "summer" ? "sun" : "snowflake";
  return (
    <div className={`season-display ${season}`}>
      <i className={`massive ${displayIcon} icon icon-left`}></i>
      <h1>{displayText}</h1>
      <i className={`massive ${displayIcon} icon icon-right`}></i>
    </div>
  );
};

export default SeasonDisplay;
