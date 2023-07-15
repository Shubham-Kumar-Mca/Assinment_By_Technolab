import React from "react";
import WeatherInfo from "./WeatherInfo";

const Map = ({ state }) => {
  return (
    <div className="map__container">
      <div className="mapouter">
        <div className="gmap_canvas">
          {/* Embedded Google Maps iframe */}
          <iframe
            src={`https://maps.google.com/maps?q=${state.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            frameBorder="0"
          ></iframe>
        </div>
      </div>
      {/* Render WeatherInfo component */}
      <WeatherInfo state={state} />
    </div>
  );
};

export default Map;
