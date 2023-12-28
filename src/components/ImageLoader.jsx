// import brokenCloudsImg from "../utils/images/weather-broken-clouds.png";
// import clearSkyImg from "../utils/images/weather-clear-sky-night.png";
import fewCloudsDayImg from "../utils/images/weather-few-clouds-day.png";
// import fewCloudsImg from "../utils/images/weather-few-clouds-night.png";
import mistImg from "../utils/images/weather-mist.png";
import clearSkyDayImg from "../utils/images/weather-clear-sky-day.png";
import rainDayImg from "../utils/images/weather-rain-day.png";
// import rainNightImg from "../utils/images/weather-rain-night.png";
// import scatteredCloudImg from "../utils/images/weather-scattered-clouds-day.png";
import showerRainImg from "../utils/images/weather-shower-rain.png";
import snowImg from "../utils/images/weather-snow.png";
import thunderstormImg from "../utils/images/weather-thunderstorm.png";

const ImgComponent = (props) => {
  const { imgSrc } = props;
  return <img className="h-full" src={imgSrc} />;
};

const ImageLoader = (props) => {
  const { weather } = props;
  switch (weather.toLowerCase()) {
    case "thunderstorm":
      return <ImgComponent imgSrc={thunderstormImg} />;
    case "drizzle":
      return <ImgComponent imgSrc={showerRainImg} />;
    case "rain":
      return <ImgComponent imgSrc={rainDayImg} />;
    case "snow":
      return <ImgComponent imgSrc={snowImg} />;
    case "atmosphere":
      return <ImgComponent imgSrc={mistImg} />;
    case "clear":
      return <ImgComponent imgSrc={clearSkyDayImg} />;
    case "clouds":
      return <ImgComponent imgSrc={fewCloudsDayImg} />;
  }
};

export default ImageLoader;
