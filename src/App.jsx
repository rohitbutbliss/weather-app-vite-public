import { useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import { useFetchData } from "./utils/hooks/useFetchData";
import WeatherUI from "./components/WeatherUI";

const App = () => {
  const { getCurrentLocation, weatherData, cityName, isDataLoaded } =
    useFetchData();

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-[#ad9efe] to-[#9584ff] min-h-screen w-screen flex flex-col text-white p-4  font-kalnia">
        {isDataLoaded ? (
          <WeatherUI weatherData={weatherData} cityName={cityName} />
        ) : (
          <>Data is not loaded</>
        )}
      </div>
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
]);

export default AppRouter;
