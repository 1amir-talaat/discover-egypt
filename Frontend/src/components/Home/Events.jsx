import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import SwiperCore from "swiper";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { useLanguage } from "../../context/LanguageContext";
import "swiper/css";
import "./Events.css";
import "swiper/css/effect-cards";

import eventsData from "./events.json";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Events() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const { language } = useLanguage();

  let data = eventsData[language];

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
    <div className="events">
      <div className="slide">
        <Swiper
          grabCursor={true}
          onSlideChange={handleSlideChange}
          slidesPerView= {'auto'}
          centeredSlides= {true}
          spaceBetween= {20}
          loop= {true}
          onSwiper={(swiper) => setSwiperRef(swiper)}
          scrollbar={{ draggable: true }}
        >
          {data.map((d) => {
            return (
              <SwiperSlide>
                <div className="swiper-slide-content">
                  <img src={d.image} alt={d["title"]} className="cov-img" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={`event-info  d-flex flex-column  ${language == "en" ? "event-info-right" : ""}`}>
        <div className="info-data flex-grow-1">
          <h1>{data[activeIndex % data.length].title}</h1>
          <p className="p-info">{data[activeIndex % data.length].description}</p>
          <button className="btn info-btn">{language == "ar" ? "عرض المزيد" : "show more"}</button>
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
