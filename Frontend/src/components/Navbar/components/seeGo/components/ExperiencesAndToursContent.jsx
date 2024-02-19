import { useEffect, useState } from "react";
import { useLanguage } from "../../../../../context/LanguageContext";
import axios from "axios";
import PropTypes from "prop-types";
import Select, { components } from "react-select";
import customStyles from "../selectCustemStyle";
import { FaArrowLeft } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import governorates from "../governorates.json";

function ExperiencesAndToursContent() {
  const { language } = useLanguage();
  const [selectedCity, setSelectedCity] = useState("Cairo");
  const [weatherData, setWeatherData] = useState({});

  const options = governorates[language].map((x, index) => {
    return { value: governorates.en[index], label: x };
  });

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=1b72642ef30dedb2d2cbe81165cca842`);
        setWeatherData(response.data);
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
            <Menu options={options} setSelectedCity={setSelectedCity} />
          </div>
          <div className="icon-wrapper">
            <div className="weather-ico">
              <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon.replace("n", "d")}@2x.png`} alt="" />
            </div>
            <div className="weather-text"></div>
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
