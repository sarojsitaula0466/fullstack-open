import { useEffect, useState } from "react";
import axios from "axios";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  const [countries, setCountries] = useState([]);
  const [text, setText] = useState("");
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [weather, setWeather] = useState(null);

  const handleChange = (e) => {
    const input = e.target.value;
    setText(input);
  };

  const api_key = import.meta.env.VITE_SOME_KEY;

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => setCountries(response.data));
  }, []);

  useEffect(() => {
    if (text.length > 0) {
      const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().startsWith(text),
      );
      setSelectedCountries(filteredCountries);
    } else {
      setSelectedCountries([]);
    }
  }, [text]);

  useEffect(() => {
    if (selectedCountries.length === 1) {
      const capital = selectedCountries.map((country) => country.capital);

      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${capital[0]}`,
        )
        .then((response) => setWeather(response.data));
    }
  }, [selectedCountries]);

  const handleShowCountry = (country) => {
    setSelectedCountries(country);
  };
  return (
    <>
      <div>
        find countries <input value={text} onChange={handleChange} />
      </div>
      {selectedCountries.length > 10
        ? "Too many matches, specify another filter"
        : null}
      {selectedCountries.length > 1 && selectedCountries.length <= 10 ? (
        <CountriesList
          selectedCountries={selectedCountries}
          handleShowCountry={handleShowCountry}
        />
      ) : null}
      {selectedCountries.length === 1 ? (
        <>
          <CountryDetails selectedCountry={selectedCountries} />
          <WeatherDetails weatherData={weather} />
        </>
      ) : null}
    </>
  );
}

export default App;
