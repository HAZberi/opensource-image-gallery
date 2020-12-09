import React from "react";
import "./SeasonDisplay.css";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) return lat > 0 ? "summer" : "winter";
  return lat > 0 ? "winter" : "summer";
};

const options = {
  summer: { text: "Lets Hit the Beach!", icon: "sun" },
  winter: { text: "Burr its Chilly!", icon: "snowflake" },
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, icon } = options[season];
  console.log(season);
  return (
    <div className={`season-display ${season}`}>
      <i className={`massive ${icon} icon icon-left`}></i>
      <h1>{text}</h1>
      <i className={`massive ${icon} icon icon-right`}></i>
    </div>
  );
};

SeasonDisplay.defaultProps = {
  lat: 0,
};

export default SeasonDisplay;
