import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "../context/LanguageContext";
import heroVideo from "./video/SeaMagic.mp4";
import "./SeaMagic.css";

function SeaMagic() {
    const { language } = useLanguage();
    const langDirection = language == 'en' ? "ltr" : "rtl";

    return (
        <>
            <div className="video-box">
                <video loop muted autoPlay playsInline >
                    <source src={heroVideo} type="video/mp4" />
                </video>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <h1 style={{ fontSize: 50 }}>{language == "en" ? "Make the Most of the Coast" : "حقق أقصى استفادة من الشاطئ"}</h1>
                    <Swiper
                        spaceBetween={15}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.5,
                            },
                            768: {
                                slidesPerView: 2.5,
                            },
                            1400: {
                                slidesPerView: 3,
                            },
                        }}
                        dir={langDirection}
                        key={langDirection}
                    >
                        <SwiperSlide >
                            <div className="test w-100 position-relative">
                                <img className="w-100 rounded category-image" src="https://images.pexels.com/photos/3214972/pexels-photo-3214972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <h1 className={`text-white position-absolute ${language === "en" ? "category-title-en" : "category-title-ar"} `}>{language == "en" ? "Antiquities and Civilization" : "الآثار والحضارة"}</h1>
                                <button className={`btn position-absolute ${language == "en" ? "category-button-en" : "category-button-ar"} `}>{language == "en" ? "Explore More" : "أستكشف أكثر"}</button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide >
                            <div className="test w-100 position-relative">
                                <img className="w-100 rounded category-image " src="https://images.pexels.com/photos/1755390/pexels-photo-1755390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <h1 className={`text-white position-absolute ${language === "en" ? "category-title-en" : "category-title-ar"} `}>{language == "en" ? "Nature and Adventure" : "الطبيعة والمغامرة"}</h1>
                                <button className={`btn position-absolute ${language == "en" ? "category-button-en" : "category-button-ar"} `}>{language == "en" ? "Explore More" : "أستكشف أكثر"}</button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide >
                            <div className="test w-100 position-relative">
                                <img className="w-100 rounded category-image " src="https://images.pexels.com/photos/3264721/pexels-photo-3264721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <h1 className={`text-white position-absolute ${language === "en" ? "category-title-en" : "category-title-ar"} `}>{language == "en" ? "Sea Magic" : "سحر البحر"}</h1>
                                <button className={`btn position-absolute ${language == "en" ? "category-button-en" : "category-button-ar"} `}>{language == "en" ? "Explore More" : "أستكشف أكثر"}</button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </>
    );
}

export default SeaMagic;
