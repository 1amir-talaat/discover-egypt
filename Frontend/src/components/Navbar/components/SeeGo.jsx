import { useLanguage } from "../../../context/LanguageContext";
import { FaArrowLeft } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";

import Select from "react-select";
import { useEffect, useState } from "react";
import axios from "axios";

import governorates from "./governorates";
import customStyles from "./selectCustemStyle";

function SeeGo({ type }) {
  const { language } = useLanguage();
  const [selectedCity, setSelectedCity] = useState("Cairo");
  const [weatherData, setWeatherData] = useState(null);

  const options = governorates[language].map((x, index) => {
    return { value: governorates.en[index], label: x };
  });

  const handleChange = (selectedOption) => {
    setSelectedCity(selectedOption.value);
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=1b72642ef30dedb2d2cbe81165cca842`);
        // setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [selectedCity]);

  console.log(weatherData);

  return (
    <>
      <div className="article">
        <div className="article-card">
          <p>{language == "ar" ? "حان وقت العرض" : "Show time"}</p>
          <p>{language == "ar" ? "مهرجان القاهرة السينمائي" : "Cairo International Film Festival"}</p>
          <a href="#">
            <span>{language == "ar" ? "اعرف أكثر" : "Learn More"}</span>
            <FaArrowLeft />
          </a>
        </div>
        <div className="article-card">
          <p>{language == "ar" ? "حان وقت العرض" : "Show time"}</p>
          <p>{language == "ar" ? "مهرجان القاهرة السينمائي" : "Cairo International Film Festival"}</p>
          <a href="#">
            <span>{language == "ar" ? "اعرف أكثر" : "Learn More"}</span>
            <FaArrowLeft />
          </a>
        </div>
      </div>
      <div className="weather-wrapper">
        <div className="weather-header">
          <TiWeatherPartlySunny size={25} />
          <p>{language == "ar" ? "الطقس حاليًا" : "weather now"}</p>
        </div>
        <div className="weather-info">
          <div className="weather-select">
            <Select options={options} defaultValue={options[0]} onChange={handleChange} styles={customStyles} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SeeGo;
