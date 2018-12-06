import React from 'react';
import './SeasonDisplay.css';

const configSeason = {
  summer: {
            text: "let's hit the beach!",
            picture: "sun"
          },
  winter: {
            text: "Burr! It's cold!",
            picture: "snowflake"
          }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    // Lat > 0 -> summer ELSE winter
    return (lat > 0 ? 'summer' : 'winter');
  } else {
    // Lat > 0 -> winter ELSE summer
    return (lat > 0 ? 'winter' : 'summer');
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, picture } = configSeason[season];

  return (
      <div className={`season-display ${season}`}>
        <i className={`massive ${picture} icon icon-left`} />
        <h1>{text}</h1>
        <i className={`massive ${picture} icon icon-right`} />
      </div>
  );
};

export default SeasonDisplay;
