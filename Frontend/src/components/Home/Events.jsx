import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "swiper/css";
import "./Events.css";
import "swiper/css/effect-cards";

function Events() {
    const [swiperRef, setSwiperRef] = useState(null);
    const [progress, setProgress] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const { language } = useLanguage();

    const data =
        language == "ar"
            ? [
                  {
                      title: "مغامرات البحار",
                      image: "https://scth.scene7.com/is/image/scth/ritz-carlton-property-in-the-red-sea:crop?defaultImage=ritz-carlton-property-in-the-red-sea",
                      description:
                          "ويمتد ساحل البحر الأحمر لأكثر من 28 ألف كيلومتر، وأنسب وقت للاستمتاع بالبحر الدافئ والشمس هو فصل الشتاء، والذي يختلف في السعودية عن أي مكان في العالم. اقضِ أمتع الأوقات في المنتجعات الفاخرة والمستدامة",
                      atatus: "ltr",
                  },
                  {
                      title: "موسم العرمه",
                      image: "https://scth.scene7.com/is/image/scth/al-urmah-entry",
                      description:
                          "استمتع بالتخييم وسط الطبيعة الساحرة وأنشطة السياحة البيئية المختلفة في صحراء مصر.",
                      atatus: "ltr",
                  },
                  {
                      title: "عُطلات مصر",
                      image: "https://scth.scene7.com/is/image/scth/three-kids-exploring-acave",
                      description:
                          "اكتشف عروضنا المثيرة - بما في ذلك رحلات السفاري خلال عطلتك القادمة.",
                      atatus: "ltr",
                  },
              ]
            : [
                  {
                      title: "Sea Adventures",
                      image: "https://scth.scene7.com/is/image/scth/ritz-carlton-property-in-the-red-sea:crop?defaultImage=ritz-carlton-property-in-the-red-sea",
                      description:
                          "The Red Sea coast extends for more than 28 thousand kilometers, and the most appropriate time to enjoy the warm sea and sun is the winter season, which is different in Saudi Arabia from anywhere in the world. Spend the most enjoyable times in luxurious and sustainable resorts",
                      atatus: "rtl",
                  },
                  {
                      title: "Arama season",
                      image: "https://scth.scene7.com/is/image/scth/al-urmah-entry",
                      description:
                          "Enjoy camping amidst the enchanting nature and various eco-tourism activities in the Egyptian desert.",
                      atatus: "rtl",
                  },
                  {
                      title: "Egypt Holidays",
                      image: "https://scth.scene7.com/is/image/scth/three-kids-exploring-acave",
                      description:
                          "Discover our exciting offers - including safaris during your next holiday",
                      atatus: "rtl",
                  },
              ];

    console.log(progress);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
        updateProgress(swiper.activeIndex, swiper.slides.length);
    };

    const prevHandler = () => {
        swiperRef.slidePrev();
    };

    const nextHandler = () => {
        swiperRef.slideNext();
    };

    const updateProgress = (activeIndex, totalSlides) => {
        const progress = (activeIndex / (totalSlides - 1)) * 100;
        setProgress(progress);
    };

    return (
        <div className="events position-relative">
            <div className="slide">
                <Swiper
                    grabCursor={true}
                    onSlideChange={handleSlideChange}
                    className="mySwiper"
                    spaceBetween={30}
                    effect={"fade"}
                    onSwiper={(swiper) => setSwiperRef(swiper)}
                    scrollbar={{ draggable: true }}
                >
                    {data.map((d) => {
                        return (
                            <SwiperSlide>
                                <img
                                    src={d.image}
                                    alt={d["title"]}
                                    className="cov-img"
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <div
                className={`event-info  d-flex flex-column  ${
                    language == "en" ? "event-info-right" : ""
                }`}
            >
                <div className="info-data flex-grow-1">
                    <h1>{data[activeIndex % data.length].title}</h1>
                    <p className="p-info">
                        {data[activeIndex % data.length].description}
                    </p>
                    <button className="btn info-btn">
                        {language == "ar" ? "عرض المزيد" : "show more"}
                    </button>
                </div>

                <div className="info-buttons flex-grow-0 d-flex">
                    <div className="events-buttons">
                        <button onClick={prevHandler}>{"<"}</button>
                        <button onClick={nextHandler}>{">"}</button>
                    </div>
                    <div className="progress-bar-container">
                        <div
                            className="progress-bar"
                            style={{
                                width: `${progress}%`,
                                backgroundColor: "red",
                                height: "10px",
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
