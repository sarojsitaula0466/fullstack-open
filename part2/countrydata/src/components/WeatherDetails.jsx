const WeatherDetails = ({ weatherData }) => {
  const toMeterPerSecond = () => {
    const toMps = (weatherData?.current.wind_kph * 1000) / 3600;
    return toMps.toFixed(2);
  };
  return (
    <>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          margin: "20px 0 20px 0",
        }}
      >{`Weather in ${weatherData?.location.name}`}</div>
      <div
        style={{
          fontWeight: "bold",
        }}
      >{`temperature ${weatherData?.current.temp_c} Celcius`}</div>
      <img src={weatherData?.current.condition.icon} />
      <div
        style={{
          fontWeight: "bold",
        }}
      >{`wind ${toMeterPerSecond()} m/s`}</div>
    </>
  );
};

export default WeatherDetails;
