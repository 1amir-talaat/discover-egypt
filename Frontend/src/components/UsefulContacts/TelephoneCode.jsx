import React from "react";
import "./TelephoneCode.css";
import { useLanguage } from "../../context/LanguageContext";
function TelephoneCode(){
    const {language}=useLanguage();
    return(
        <div className="container-fluid full-telephonecode-container">
            <div className="container telephonecode-container">
                <div className="row">

                    <div className={language=="en"?"text-section-en":"text-section-ar"}>
                        <h2>{language=="en"?"Telephone code and providers":"مفتاح الخط وشركات الاتصالات"}</h2>
                        <p>{language=="en"?"ُEgypt's country code is +20. There are three mobile network providers in Egypt. These are:":"مفتاح الخط هو 20+. يوجد ثلاث شبكات للهاتف المحمول في مصر:"}</p>
                        <p><b>{language=="en"?"- We (by Telecom Egypt)":"- وي (المصرية للاتصالات)"}</b></p>
                        <p><b>{language=="en"?"- Vodafone Egypt":"- فودافون مصر"}</b></p>
                        <p><b>{language=="en"?"- Orange (formerly Mobinil)":"- أورانج"} </b></p>
                        <p><b>{language=="en"?"- Etisalat":"- اتصالات"} </b></p>


                    </div>
                    <div className={language=="en"?"img-section-en":"img-section-ar"}>
                        <img src="https://scth.scene7.com/is/image/scth/Redsea%20Jeddah%201"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TelephoneCode;