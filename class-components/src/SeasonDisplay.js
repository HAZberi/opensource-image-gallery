import React from "react";
import "./SeasonDisplay.css";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) return lat > 0 ? "summer" : "winter";
  return lat > 0 ? "winter" : "summer";
};

const options = {
  summer: { text: "Lets Hit the Beach!", icon: "summer" },
  winter: { text: "Burr its Chilly!", icon: "snowflake" },
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  return (
    <div className={`season-display ${season}`}>
      <i className={`massive ${options[season].icon} icon icon-left`}></i>
      <h1>{options[season].text}</h1>
      <i className={`massive ${options[season].icon} icon icon-right`}></i>
    </div>
  );
};

export default SeasonDisplay;
