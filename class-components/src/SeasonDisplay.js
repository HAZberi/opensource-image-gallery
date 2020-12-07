import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) return lat > 0 ? "summer" : "winter";
  return lat > 0 ? "winter" : "summer";
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const displayText =
    season === "summer" ? "Lets Hit the Beach" : "Burr its Chilly";
  return (
    <div>
      <h1>{displayText}</h1>
    </div>
  );
};

export default SeasonDisplay;
