import CurrentData from "./CurrentData";
import WeeklyData from "./WeeklyData";

const WeatherUI = (props) => {
  const { weatherData, cityName } = props;
  return (
    <>
      <p className="text-center text-5xl font-medium">{cityName}</p>
      <CurrentData currentData={weatherData.data.current} />
      <WeeklyData weeklyData={weatherData.data.daily} />
    </>
  );
};

export default WeatherUI;
