import React from "react";
import "./travel-safety-tips.css";
import { useLanguage } from "../../context/LanguageContext";

function TravelSafetyTips() {
  const { language } = useLanguage();
  return (
    <>
      <div className={`landing d-flex align-items-center ${language != "ar" ? "landing-en" : ""}`}>
        <h1>نصائح حول السفر الآمن إلى مصر</h1>
        <div className="shadow-1"></div>
        <div className="shadow-2"></div>
      </div>
    </>
  );
}

export default TravelSafetyTips;
