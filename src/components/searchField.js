import React, { useState, useEffect } from "react";
import axios from "axios";
import CityTemp from "./cityTemp";

function SearchInput() {
  const [query, setQuery] = useState("London");
  const [temp, setTemp] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [country, setCountry] = useState("");

  const api = {
    key: "eeb35e72889f1b7193a428a83b77968d",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${api.base}weather?q=${query}&units=metric&appid=${api.key}`
      );
      setTemp(result.data.main);
      setCity(result.data);
      setWeather(result.data.weather[0].description);
      setCountry(result.data.sys.country);
    };
    fetchData();
  }, [query]);

  return (
    <div className="searchField">
      <h4>WEATHER APP</h4>
      <input
        placeholder="SEARCH FOR CITY"
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />

      <CityTemp temp={temp} city={city} weather={weather} country={country} />
    </div>
  );
}

export default SearchInput;
