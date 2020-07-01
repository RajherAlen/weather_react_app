import React from "react";

function CityTemp({ temp, city, weather, country }) {
  return (
    <div>
      <h2 className="name"> {city.name} </h2>
      <h4>{country}</h4>
      {weather === "clear sky" ? (
        <i className="fas fa-sun"></i>
      ) : (
        <i className="fas fa-cloud"></i>
      )}
      <h1 className="temp">{temp.temp} °C </h1>
      <h3 className="weather"> {weather} </h3>
    </div>
  );
}

export default CityTemp;
