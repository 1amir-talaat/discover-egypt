import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./UsefulNumbers.css";
function UsefulNumbers(){
    const {language}=useLanguage();

    return(
        <>
        <div className="full-usefulnumbers-container">
            <div className="container usefulnumbers-container">
                
                <h1>{language=="en"?"Useful contacts":"أرقام مفيدة"}</h1>
                <div className="row">

                    <div className="card ">
                        <div className="card-title">{language=="en"?"Tourism":" الخدمات السياحية"}</div>
                        <div className="card-body">
                            <p><b>{language=="en"?"Tourism Call Center:":"مركز الاتصال السياحي: "}</b>19654</p>
                            <p><b>{language=="en"?"General Directorate of Passports:":" المديرية العامة للجوازات: "}</b>0227956301</p>

                        </div>
                    </div>
                    <div className="card ">
                        <div className="card-title">{language=="en"?"Consumer services":"خدمات المستهلك"}</div>
                        <div className="card-body">
                            <p><b>{language=="en"?"Municipal services:":"البلديات: "}</b>139</p>
                            <p><b>{language=="en"?"Electricity company emergency:":"طوارئ الكهرباء: "}</b>121</p>
                            <p><b>{language=="en"?"Consumer protection:":"حماية المستهلك: "}</b>19588</p>
                        </div>
                    </div>
                    <div className="card ">
                        <div className="card-title">{language=="en"?"Public security":"الأمن العام"}</div>
                        <div className="card-body">
                            <p><b>{language=="en"?"ُEgypt Public Security:":"مديرية الأمن العام:"}</b>115</p>
                            <p><b>{language=="en"?"Complaints and inquiries:":"الشكاوي والاستعلامات: "}</b>16528</p>
                            <p><b>{language=="en"?"Emergency medical consultation:":"الاستشارات الطبية: "}</b>111</p>
                            <p><b>{language=="en"?"General Directorate of Narcotics Control:":"الإدارة العامة لمكافة المخدرات: "}</b>16023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default UsefulNumbers;