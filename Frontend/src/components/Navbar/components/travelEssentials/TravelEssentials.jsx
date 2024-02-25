import React from "react";
import { useLanguage } from "../../../../context/LanguageContext";
import { FaArrowLeft } from "react-icons/fa";
import { BsTelephone, BsGrid3X3Gap } from "react-icons/bs";
import { BiSolidAmbulance } from "react-icons/bi";

function TravelEssentials() {
  const { language } = useLanguage();

  const text = {
    en: {
      knowMore: "Know More",
      learnAboutEgypt: "Learn about Egypt",
      showTime: "Show time",
      safetyTravelTips: "Safety Travel Tips",
      importantNumbers: "Important numbers",
      police: "Police",
      ambulance: "Ambulance",
      fireDepartment: "Fire Department",
    },
    ar: {
      knowMore: "اعرف أكثر",
      learnAboutEgypt: "معلومات حول مصر",
      showTime: "حان وقت العرض",
      safetyTravelTips: "نصائح السفر الآمن",
      importantNumbers: "أرقام مهمة",
      police: "الشرطة",
      ambulance: "الإسعاف",
      fireDepartment: "المطافئ",
    },
  };

  return (
    <>
      <div className="article">
        <div className="article-card">
          <p>{text[language].knowMore}</p>
          <p>{text[language].learnAboutEgypt}</p>
          <a href="#">
            <span>{text[language].knowMore}</span>
            <FaArrowLeft className="arrow" />
          </a>
        </div>
        <div className="article-card">
          <p>{text[language].showTime}</p>
          <p>{text[language].safetyTravelTips}</p>
          <a href="#">
            <span>{text[language].knowMore}</span>
            <FaArrowLeft className="arrow" />
          </a>
        </div>
      </div>
      <div className="weather">
        <div className="weather-wrapper">
          <div className="weather-header">
            <BsTelephone size={20} />
            <p>{text[language].importantNumbers}</p>
          </div>
          <div className="number-wapper d-flex align-items-center  gap-4 p-3 px-4">
            <div className="number-card d-flex align-items-center ">
              <BsGrid3X3Gap className="number-ico" />
              <div className="number-info">
                <div className="number">122</div>
                <div className="sub-number-info">{text[language].police}</div>
              </div>
            </div>
            <div className="number-card d-flex align-items-center ">
              <p className="number-ico">+</p>
              <div className="number-info">
                <div className="number">123</div>
                <div className="sub-number-info">{text[language].ambulance}</div>
              </div>
            </div>
            <div className="number-card d-flex align-items-center ">
              <BiSolidAmbulance className="number-ico" />
              <div className="number-info">
                <div className="number">180</div>
                <div className="sub-number-info">{text[language].fireDepartment}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TravelEssentials;
