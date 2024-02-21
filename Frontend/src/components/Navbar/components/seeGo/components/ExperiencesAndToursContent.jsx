import { useEffect, useState } from "react";
import { useLanguage } from "../../../../../context/LanguageContext";
import axios from "axios";
import PropTypes from "prop-types";
import Select, { components } from "react-select";
import customStyles from "../selectCustemStyle";
import { FaArrowLeft } from "react-icons/fa";
import { TbTemperaturePlus } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TbTemperatureMinus } from "react-icons/tb";

import governorates from "../governorates.json";

function ExperiencesAndToursContent() {
  const { language } = useLanguage();
  const [selectedCity, setSelectedCity] = useState("Cairo");
  const [weatherData, setWeatherData] = useState(null);

  const options = governorates[language].map((x, index) => {
    return { value: governorates.en[index], label: x };
  });

  function kelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(0);
  }

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather/?q=${selectedCity}&lang=ar&appid=1b72642ef30dedb2d2cbe81165cca842`
        );
        console.log(response);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (!weatherData || selectedCity !== "Cairo") {
      fetchWeatherData();
    }
    
  }, [selectedCity, weatherData]);

  function translateWeatherCondition(condition) {
    switch (condition) {
      case "Thunderstorm":
        return language === "ar" ? "عواصف رعدية" : "Thunderstorm";
      case "Drizzle":
        return language === "ar" ? "ندى" : "Drizzle";
      case "Rain":
        return language === "ar" ? "مطر" : "Rain";
      case "Snow":
        return language === "ar" ? "ثلوج" : "Snow";
      case "Mist":
        return language === "ar" ? "ضباب" : "Mist";
      case "Smoke":
        return language === "ar" ? "دخان" : "Smoke";
      case "Haze":
        return language === "ar" ? "ضباب" : "Haze";
      case "Dust":
        return language === "ar" ? "غبار" : "Dust";
      case "Fog":
        return language === "ar" ? "ضباب" : "Fog";
      case "Sand":
        return language === "ar" ? "عواصف رملية" : "Sand";
      case "Ash":
        return language === "ar" ? "رماد" : "Ash";
      case "Squall":
        return language === "ar" ? "عواصف" : "Squall";
      case "Tornado":
        return language === "ar" ? "إعصار" : "Tornado";
      case "Clear":
        return language === "ar" ? "صافي" : "Clear";
      case "Clouds":
        return language === "ar" ? "غائم" : "Cloudy";
      default:
        return condition;
    }
  }

  return (
    <>
      <div className="article">
        <div className="article-card">
          <p>{language == "ar" ? "حان وقت العرض" : "Show time"}</p>
          <p>{language == "ar" ? "مهرجان القاهرة السينمائي" : "Cairo International Film Festival"}</p>
          <a href="#">
            <span>{language == "ar" ? "اعرف أكثر" : "Learn More"}</span>
            <FaArrowLeft className="arrow" />
          </a>
        </div>
        <div className="article-card">
          <p>{language == "ar" ? "حان وقت العرض" : "Show time"}</p>
          <p>{language == "ar" ? "مهرجان القاهرة السينمائي" : "Cairo International Film Festival"}</p>
          <a href="#">
            <span>{language == "ar" ? "اعرف أكثر" : "Learn More"}</span>
            <FaArrowLeft className="arrow" />
          </a>
        </div>
      </div>
      <div className="weather">
        <div className="weather-wrapper">
          <div className="weather-header">
            <TiWeatherPartlySunny size={25} />
            <p>{language == "ar" ? "الطقس حاليًا" : "weather now"}</p>
          </div>
          <div className="weather-info">
            <div className="weather-select">
              <Menu options={options} setSelectedCity={setSelectedCity} />
            </div>
            {weatherData && (
              <>
                <div className="icon-wrapper">
                  <div className="weather-ico">
                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon.slice(0, -1)}d@2x.png`} alt="" />
                  </div>
                  <div className="weather-text">{translateWeatherCondition(weatherData.weather[0].main)}</div>
                </div>
                <div className="main-temp">
                  <span>{kelvinToCelsius(weatherData.main.temp)}°C</span>
                </div>
                <div className="temp-min-max">
                  <div className="temp">
                    <span>{Number(kelvinToCelsius(weatherData.main.temp_min)) - 3}°C</span>
                    <TbTemperatureMinus />
                  </div>
                  <div className="temp">
                    <span>{Number(kelvinToCelsius(weatherData.main.temp_max)) + 2}°C</span>
                    <TbTemperaturePlus />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

Menu.propTypes = {
  options: PropTypes.array.isRequired,
  setSelectedCity: PropTypes.func.isRequired,
};

function Menu({ options, setSelectedCity }) {
  const [uniqueId] = useState(() => "select_" + Math.random().toFixed(5).slice(2));
  const handleChange = (selectedOption) => {
    setSelectedCity(selectedOption.value);
  };

  return (
    <Select
      id={uniqueId}
      components={{
        Menu: (props) => <components.Menu {...props} className="menu" />,
      }}
      onMenuClose={() => {
        const menuEl = document.querySelector(`#${uniqueId} .menu`);
        const containerEl = menuEl?.parentElement;
        const clonedMenuEl = menuEl?.cloneNode(true);

        if (!clonedMenuEl) return;

        clonedMenuEl.classList.add("menu--close");
        clonedMenuEl.addEventListener("animationend", () => {
          containerEl?.removeChild(clonedMenuEl);
        });

        containerEl?.appendChild(clonedMenuEl);
      }}
      options={options}
      defaultValue={options[0]}
      onChange={handleChange}
      styles={customStyles}
    />
  );
}

export default ExperiencesAndToursContent;
