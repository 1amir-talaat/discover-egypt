import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./KeepExploring.css";
function KeepExploring(){
    const {language}=useLanguage();
    const arrowleft=<svg className="icon-ar" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                    </svg>
    const arrowright=<svg className="icon-en" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                    </svg>             
    return(
        <div className="full-keepexploring-container">
            <div className="container keepexploring-container">
                
                <h1>{language=="en"?"Keep exploring":"اكتشف أكثر"}</h1>
                <div className="row">

                    <div className="card ">
                        <div className="card-title">
                            <img className="img" src="https://scth.scene7.com/is/image/scth/brand-page-hero-1460:crop-375x210?defaultImage=brand-page-hero-1460&wid=580&hei=324"/>
                        </div>    
                        <div className="card-body">
                            <p><b>{language=="en"?"About Egypt":"معلومات حول مصر"}</b></p>
                            
                        </div>
                        <div className="card-footer">
                            <a href="">{language=="en"?"Learn more":"اعرف أكثر"}</a>
                            {language=="en"?arrowright:arrowleft}
                        </div>
                    </div>
                    <div className="card ">
                        <div className="card-title">
                            <img className="img" src="https://scth.scene7.com/is/image/scth/South%20Farms-%20crop%202:crop-375x210?defaultImage=South%20Farms-%20crop%202&wid=580&hei=324"/>
                        </div>
                        <div className="card-body">
                            <p><b>{language=="en"?"Safety travel tips":"نصائح السفر الآمن"}</b></p>
                            
                        </div>
                        <div className="card-footer">
                            <a href="">{language=="en"?"Learn more":"اعرف أكثر"}</a>
                            {language=="en"?arrowright:arrowleft} 
                        </div>
                    </div>
                    <div className="card ">
                        <div className="card-title">
                            <img className="img" src="https://scth.scene7.com/is/image/scth/1920x1080_1-…75x210?defaultImage=1920x1080_1-2&wid=580&hei=324"/>
                        </div>
                        <div className="card-body">
                            <p><b>{language=="en"?"Travel Regulations":"إرشادات ومتطلبات السفر"}</b></p>
                        </div>
                        <div className="card-footer">
                            <a href="">{language=="en"?"Learn more":"اعرف أكثر"}</a>
                            {language=="en"?arrowright:arrowleft} 
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default KeepExploring;