import weatherImgSrc from "../utils/weather-images";
import ImageLoader from "./ImageLoader";
const CurrentData = (props) => {
  const { currentData } = props;
  const { weather } = currentData;
  const imgSrc = `../utils/images/${weatherImgSrc[weather[0]?.main]?.day}`;

  console.log(imgSrc);

  return (
    <>
      <div className="text-8xl text-center my-10 font-bold whitespace-nowrap flex justify-center flex-col items-center">
        <p className="flex items-start">
          {(currentData.temp.toFixed(2) - 273.15).toFixed(2)}
          <span className="text-6xl">&deg;</span>
        </p>
        <p className=":text-2xl font-normal">{weather[0].main}</p>
      </div>
      <div className="h-[150px] flex justify-center">
        <ImageLoader weather={weather[0].main} />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="text-2xl">Wind</span>
          <span className="text-3xl">{currentData.wind_speed} km/h</span>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl">Humidity</span>
          <span className="text-4xl">{currentData.humidity} %</span>
        </div>
      </div>
    </>
  );
};

export default CurrentData;
