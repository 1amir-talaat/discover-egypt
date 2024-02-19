import { useLanguage } from "../../context/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { useEffect, useState } from "react";

import data from "./hero.json";

import "swiper/css";
import "swiper/css/effect-cards";
import "./hero.css";

function Hero() {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [heroSwiper, setHeroSwiper] = useState(null);

  let heroData = data[language];

  const handleSlideChange = (swiper) => {
    console.log(swiper);
    setActiveIndex(swiper.activeIndex);
  };

  const handleTabClick = (index) => {
    setActiveIndex(index);
    if (heroSwiper) {
      heroSwiper.slideTo(index);
    }
  };
  useEffect(() => {
    if (heroSwiper) {
      heroSwiper.on("slideChange", () => {
        const animatedElements = document.querySelectorAll(".hero-animated");
        console.log(animatedElements);
        animatedElements.forEach((element) => {
          element.style.animation = "none";
          requestAnimationFrame(() => {
            element.style.animation = "fadeInUp 0.4s ease-in-out forwards";
          });
        });
      });
    }
    return () => {
      if (heroSwiper) {
        heroSwiper.off("slideChange");
      }
    };
  }, [heroSwiper]);

  return (
    <div className="hero " style={{paddingTop:100}}>
      <div className="overlay">
        <img src={heroData[activeIndex].img} alt="" className="blur" />
        <div className="shodo"></div>
      </div>

      <div className="hero-content container">
        <div className="top-section">
          <div className="hero-text hero-animated">
            <div className="hero-text-content">
              <h1 className="hero-text-title">{heroData[activeIndex].title}</h1>
              <p className="hero-text-description">{heroData[activeIndex].description}</p>
            </div>
            <a className="hero-btn">{language == "ar" ? "اعرف اكثر" : "learn more"}</a>
          </div>
          <div className="hero-slider">
            <Swiper
              dir={language == "ar" ? "rtl" : "ltr"}
              autoplay={{ delay: 500 }}
              effect={"cards"}
              onSwiper={(swiper) => setHeroSwiper(swiper)}
              grabCursor={true}
              onSlideChange={handleSlideChange}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {heroData.map((d, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img src={d.img} alt={d.title} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="tab-area">
          {heroData.map((d, index) => {
            return (
              <div key={index} className={activeIndex == index ? "tab-item active" : "tab-item"} onClick={() => handleTabClick(index)}>
                <div className="tab-title">{d.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Hero;
