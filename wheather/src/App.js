import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import "./App.css";

const App = () => {
  const [state, setState] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch weather data from API
  const fetchingData = (url) => {
    setIsLoading(true);
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        setIsLoading(false);
        setState(res);
      })
      .catch(function (err) {
        setIsLoading(false);
        console.log(err);
      });
  };

  // Function to handle city search
  const handelCitySearch = (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8704616c895385606245a12d2efe5564`;
    fetchingData(url);
  };

  // Function to get weather data based on user's location
  const getWeatherLocation = (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8704616c895385606245a12d2efe5564`;
    fetchingData(url);
  };

  // Function to get user's current location and fetch weather data
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getWeatherLocation(latitude, longitude);
    });
  };

  useEffect(() => {
    // Fetch weather data for user's location on component mount
    getLocation();
  }, []);

  return (
    <div>
      {/* Navbar component for city search */}
      <Navbar handelCitySearch={handelCitySearch} />
      {/* Conditional rendering based on loading state and data availability */}
      {isLoading ? <h2>Loading....</h2> : state && <Map state={state} />}
    </div>
  );
};

export default App;
