import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "../../context/LanguageContext";
import "./KeepExploring.css";

function KeepExploring(){
    const {language}=useLanguage();
    const langDirection = language == 'en' ? "ltr" : "rtl";

    const arrowleft=<svg className="icon-ar" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                    </svg>
    const arrowright=<svg className="icon-en" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                    </svg>             
    const explore_data=language=="en"?[
        {
            "id":1,
            "image":"https://scth.scene7.com/is/image/scth/brand-page-hero-1460:crop-375x210?defaultImage=brand-page-hero-1460&wid=580&hei=324",
            "title":"About Egypt"
        },
        {
            "id":2,
            "image":"https://scth.scene7.com/is/image/scth/South%20Farms-%20crop%202:crop-375x210?defaultImage=South%20Farms-%20crop%202&wid=580&hei=324",
            "title":"Safety travel tips"
        },
        {
            "id":3,
            "image":"https://scth.scene7.com/is/image/scth/1920x1080_1-…75x210?defaultImage=1920x1080_1-2&wid=580&hei=324",
            "title":"Travel Regulations"
        }
    ]
    :[
        {
            "id":1,
            "image":"https://scth.scene7.com/is/image/scth/brand-page-hero-1460:crop-375x210?defaultImage=brand-page-hero-1460&wid=580&hei=324",
            "title":"معلومات حول مصر"
        },
        {
            "id":2,
            "image":"https://scth.scene7.com/is/image/scth/South%20Farms-%20crop%202:crop-375x210?defaultImage=South%20Farms-%20crop%202&wid=580&hei=324",
            "title":"نصائح السفر الآمن"
        },
        {
            "id":3,
            "image":"https://scth.scene7.com/is/image/scth/1920x1080_1-…75x210?defaultImage=1920x1080_1-2&wid=580&hei=324",
            "title":"إرشادات ومتطلبات السفر"
        }
    ];
    return(
        <div className="full-keepexploring-container">
            <div className="container keepexploring-container">
                
                <h1>{language=="en"?"Keep exploring":"اكتشف أكثر"}</h1>
                <div className="row">
                    <Swiper
                        spaceBetween={30}
                        breakpoints={{
                            0: {
                            slidesPerView: 1.5,
                        },
                        650: {
                            slidesPerView: 2.20,
                        },
                        900: {
                            slidesPerView: 2.75,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                        1400: {
                            slidesPerView: 3.5,
                        }
                        }}
                        dir={langDirection}
                        key={langDirection}
                    >
                    {
                        explore_data.map((item,index)=>{
                            return(
                            <SwiperSlide key={index}>
                                <div className="card explore-card border-0 shadow-sm">
                                    <div className="card-title">
                                        <img className="img" src={item.image} alt={item.title}/>
                                    </div>    
                                    <div className="card-body">
                                        <p><b>{item.title}</b></p>                     
                                    </div>
                                    <div className="card-footer">
                                        <a href="">{language=="en"?"Learn more":"اعرف أكثر"}</a>
                                        {language=="en"?arrowright:arrowleft}
                                    </div>
                                </div>
                            </SwiperSlide>
                            )
                        })
                    }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default KeepExploring;