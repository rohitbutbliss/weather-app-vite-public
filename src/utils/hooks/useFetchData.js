import axios from "axios";
import { useEffect, useState } from "react";

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const BASE_URL = "https://api.openweathermap.org/data/3.0/onecall";
const BASE_LOCATION_API = "https://us1.locationiq.com/v1/reverse";

export const useFetchData = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({
    data: "",
  });

  const [isFirstTime, setIsFirstTime] = useState(true);

  const [lat, setLat] = useState("");

  const [lon, setLon] = useState("");

  const [cityName, setCityName] = useState("");

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        axios
          .get(
            `${BASE_URL}?lat=${position.coords.latitude}&lon=${
              position.coords.longitude
            }&appid=${import.meta.env.VITE_WEATHER_API}`
          )
          .then((res) => {
            console.log(res);
            setWeatherData({
              data: res.data,
            });
            setLat(`${position.coords.latitude}`);
            setLon(`${position.coords.longitude}`);
          });
      },
      () => {
        console.log("error");
      }
    );
  };

  useEffect(() => {
    if (isFirstTime) setIsFirstTime(false);
    else {
      axios
        .get(
          `${BASE_LOCATION_API}?key=${
            import.meta.env.VITE_LOCATION_API
          }&lat=${lat}&lon=${lon}&format=json`
        )
        .then((res) => {
          setCityName(res.data.address.state);
          setIsDataLoaded(true);
        });
    }
  }, [lat, lon]);

  return {
    getCurrentLocation,
    weatherData,
    setWeatherData,
    cityName,
    isDataLoaded,
  };
};
