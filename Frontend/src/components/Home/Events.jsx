import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import SwiperCore from "swiper";

import Bar from "../Bar";

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

  console.log(progress);

  const handleSlideChange = (swiper) => {
    console.log(swiper.slides.length);

    setActiveIndex(swiper.realIndex);
    updateProgress(swiper.realIndex, swiper.slides.length);
  };

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  const updateProgress = (activeIndex, totalSlides) => {
    const progress = (activeIndex / totalSlides) * 100;
    setProgress(progress);
  };

  return (
    <>
      <div className="container mt-5 mb-2">
        <h1 style={{ fontSize: 50, marginTop: 100, marginBottom: 50 }}>{language == "en" ? "Exclusive offers and events" : "عروض وفعاليات حصرية"}</h1>
      </div>

      <div className="events position-relative">
        <div className="slide">
          <Swiper
            grabCursor={true}
            onSlideChange={handleSlideChange}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={20}
            loop={true}
            initialSlide={0}
            onSwiper={(swiper) => setSwiperRef(swiper)}
            scrollbar={{ draggable: true }}
          >
            {data.map((d, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="swiper-slide-content">
                    <img
                      style={
                        d.image == "https://upload.wikimedia.org/wikipedia/commons/a/aa/Marina_egypt_haddara.jpg" ? { objectPosition: "bottom" } : {}
                      }
                      src={d.image}
                      alt={d["title"]}
                      className="cov-img"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="event-info">
          <Bar />
          <div className={` info d-flex flex-column  ${language == "en" ? "event-info-right" : ""}`}>
            <div className="info-data flex-grow-1">
              <h1>{data[activeIndex % data.length].title}</h1>
              <p className="p-info">{data[activeIndex % data.length].description}</p>
              <button className="info-btn">{language == "ar" ? "عرض المزيد" : "show more"}</button>
            </div>
          </div>
          <div className="info-buttons flex-grow-0 d-flex">
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
            <div className="events-buttons">
              <button onClick={prevHandler}>{"<"}</button>
              <button onClick={nextHandler}>{">"}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
