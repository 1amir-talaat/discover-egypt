import React from "react";
import "./Hero.css";
import { useLanguage } from "../../context/LanguageContext";
function Hero(){
    const {language}=useLanguage();
    return(
        <>
        <div className="hero-container">
            <h1>{language=="en"?"Useful contacts":"أرقام مفيدة"}</h1>
        </div>
        </>
    )
}
export default Hero;