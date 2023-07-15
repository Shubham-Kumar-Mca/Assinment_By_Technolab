import React from "react";

const WeatherInfo = ({ state }) => {
  return (
    <div>
      {/* Weather information container */}
      <div className="wather__info">
        <h2>{state.name}</h2>
        <div>
          {/* Displaying temperature information */}
          <p>&#128073; Min Temprature :- {Number.parseInt(state.main.temp - 273)}°C</p>
          <p>&#128073; Max Temprature :- {Number.parseInt(state.main.temp_max)}°C</p>
          {/* Displaying cloud information */}
          <p>&#128073; Clounds :- {state.clouds.all}</p>
          {/* Displaying sunrise and sunset information */}
          <p>&#128073; Sunrise :- {state.sys.sunrise}</p>
          <p>&#128073; Sunset :- {state.sys.sunset}</p>
        </div>
        <div>
          {/* Displaying wind information */}
          <p>Wind : </p>
          <p>&#128073; Degrees :- {state.wind.deg}</p>
          <p>&#128073; Speed :- {state.wind.speed}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
