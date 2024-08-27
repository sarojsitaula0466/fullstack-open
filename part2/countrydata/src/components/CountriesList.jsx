const CountriesList = ({ selectedCountries, handleShowCountry }) => {
  return (
    <>
      {selectedCountries.map((country, index) => {
        return (
          <div key={index}>
            {country.name.common}
            <button onClick={() => handleShowCountry([country])}>show</button>
          </div>
        );
      })}
    </>
  );
};
export default CountriesList;
