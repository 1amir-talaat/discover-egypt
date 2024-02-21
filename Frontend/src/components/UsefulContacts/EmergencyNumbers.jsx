import React from "react";
import "./EmergencyNumbers.css";
import { useLanguage } from "../../context/LanguageContext";
function EmergencyNumbers(){
    const {language}=useLanguage();
    return(
        <div className="full-emergencycode-container">
            <div className="container emergencynumbers-container">
                <div className="row">

                    <div className={language=="en"?"text-section-en":"text-section-ar"}>
                        <h2>{language=="en"?"Emergency numbers ":"أرقام الطوارئ"}</h2>
                        <p><b>{language=="en"?"Police: ":"الشرطة: "}</b>122</p>
                        <p><b>{language=="en"?"Ambulance: ":" الإسعاف: "}</b>123</p>
                        <p><b>{language=="en"?" Fire: ":"المطافئ: "}</b>180</p>
                        <p><b>{language=="en"?"Civil Defense: ":" الدفاع المدني: "}</b>240140982401409724014099</p>
                        <p><b>{language=="en"?"For traffic accidents: ":" للحوادث المرورية: "}</b>0224021233</p>
                        <p><b>{language=="en"?"Tourist Police: ":" شرطة السياحة: "}</b>126</p>
                        <p><b>{language=="en"?"Traffic Police: ":" شرطة المرور: "}</b>128</p>
                        <p><b>{language=="en"?"Railway Police: ":" شرطة السكة الحديد: "}</b>145</p>


                        

                    </div>
                    <div className={language=="en"?"img-section-en":"img-section-ar"}>
                        <img src="	https://scth.scene7.com/is/image/scth/women-using-mobile"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EmergencyNumbers;