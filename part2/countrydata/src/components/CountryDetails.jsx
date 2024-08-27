const CountryDetails = ({ selectedCountry }) => {
  return (
    <>
      {selectedCountry.map((country, index) => {
        return (
          <div key={index}>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "40px",
                margin: "10px 0 10px 0",
              }}
            >
              {country.name.common}
            </div>
            <div
              style={{
                fontWeight: "bold",
                display: "flex",
              }}
            >
              <span style={{ marginRight: "5px" }}>capital</span>{" "}
              <span>
                {country.capital.map((capital, index) => {
                  return <div key={index}>{capital}</div>;
                })}
              </span>
            </div>
            <div
              style={{
                fontWeight: "bold",
                display: "flex",
              }}
            >
              <span style={{ marginRight: "5px" }}>area</span>
              <span>{country.area}</span>
            </div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                margin: "20px 0 20px 0",
              }}
            >
              languages:
            </div>
            <div
              style={{
                fontWeight: "bold",

                margin: "20px 0 20px 0",
              }}
            >
              {Object.values(country.languages).map((lang, index) => {
                return <li key={index}>{lang}</li>;
              })}
            </div>
            <img src={country.flags.png} width="100px" height="100px" />
          </div>
        );
      })}
    </>
  );
};
export default CountryDetails;
