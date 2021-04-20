import React from "react";
import CloudsIMG from "../images/clouds.png";
import ClearSkyIMG from "../images/clearsky.png";
import MistIMG from "../images/mist.png";
import FogIMG from "../images/fog.png";
import DrizzleIMG from "../images/drizzle.png";
import SnowIMG from "../images/snow.png";
import RainIMG from "../images/rain.webp";
const WeatherImage = (props) => {
  if (props.main === "Clouds") {
    return <img width="200px" height="200px" src={CloudsIMG} alt="" />;
  } else if (props.main === "Clear") {
    return <img width="200px" height="200px" src={ClearSkyIMG} alt="" />;
  } else if (props.main === "Mist") {
    return <img width="200px" height="200px" src={MistIMG} alt="" />;
  } else if (props.main === "Rain") {
    return <img width="200px" height="200px" src={RainIMG} alt="" />;
  } else if (props.main === "Fog") {
    return <img width="200px" height="200px" src={FogIMG} alt="" />;
  } else if (props.main === "Drizzle") {
    return <img width="200px" height="200px" src={DrizzleIMG} alt="" />;
  } else if (props.main === "Snow") {
    return <img width="140px" height="150px" src={SnowIMG} alt="" />;
  } else if (props.main === "Haze") {
    return <img width="140px" height="150px" src={FogIMG} alt="" />;
  } else return null;
};

export default WeatherImage;
