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

  const heroData = data[language] || [];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (heroSwiper) {
        heroSwiper.slideNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSwiper]);

  useEffect(() => {
    const handleAnimationReset = () => {
      const animatedElements = document.querySelectorAll(".hero-animated");
      animatedElements.forEach((element) => {
        element.style.animation = "none";
        requestAnimationFrame(() => {
          element.style.animation = "fadeInUp 0.4s ease-in-out forwards";
        });
      });
    };

    if (heroSwiper) {
      heroSwiper.on("slideChange", handleAnimationReset);
    }

    return () => {
      if (heroSwiper) {
        heroSwiper.off("slideChange", handleAnimationReset);
      }
    };
  }, [heroSwiper]);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    if (heroSwiper) {
      heroSwiper.slideTo(index);
    }
  };

  return (
    <div className="hero">
      <div className="overlay">
        {heroData.length > 0 && (
          <img src={heroData[activeIndex].img} alt="" className="blur" />
        )}
        <div className="shodo"></div>
      </div>

      <div className="hero-content container">
        <div className="top-section">
          <div className="hero-text hero-animated">
            <div className="hero-text-content">
              {heroData.length > 0 && (
                <>
                  <h1 className="hero-text-title">
                    {heroData[activeIndex].title}
                  </h1>
                  <p className="hero-text-description">
                    {heroData[activeIndex].description}
                  </p>
                </>
              )}
            </div>
            <a className="hero-btn">
              {language === "ar" ? "اعرف اكثر" : "learn more"}
            </a>
          </div>
          <div className="hero-slider">
            <Swiper
              dir={language === "ar" ? "rtl" : "ltr"}
              autoplay={{ delay: 5000 }}
              loop={true} // Enable loop
              effect="cards"
              onSwiper={setHeroSwiper}
              grabCursor
              onSlideChange={handleSlideChange}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {heroData.map((d, index) => (
                <SwiperSlide key={index}>
                  <img src={d.img} alt={d.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="tab-area">
          {heroData.map((d, index) => (
            <div
              key={index}
              className={`tab-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              <div className="tab-title">{d.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
