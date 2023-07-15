import React, { useState } from "react";

const Navbar = ({ handelCitySearch }) => {
  const [city, setCity] = useState("");

  return (
    <div className="container">
      {/* Input field for city search */}
      <input
        type="text"
        placeholder="Search City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {/* Search button */}
      <button
        onClick={() => {
          handelCitySearch(city); // Call the handleCitySearch function with the entered city
          setCity(""); // Clear the input field after searching
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Navbar;
