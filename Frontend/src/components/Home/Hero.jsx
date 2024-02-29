import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "./hero.css";

import { useLanguage } from "../../context/LanguageContext";

function Hero() {
  const [heroData, setHeroData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [heroSwiper, setHeroSwiper] = useState(null);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/category/Festivals");
        const data = await response.json();
        setHeroData(data[language]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
        {heroData.length > 0 && <img src={heroData[activeIndex].image} alt="" className="blur" />}
        <div className="shodo"></div>
      </div>

      <div className="hero-content container">
        <div className="top-section">
          <div className="hero-text hero-animated">
            <div className="hero-text-content">
              {heroData.length > 0 && (
                <>
                  <h1 className="hero-text-title">{heroData[activeIndex].title}</h1>
                  <p className="hero-text-description">{heroData[activeIndex].desc}</p>
                </>
              )}
            </div>
            <a className="hero-btn">{language === "ar" ? "اعرف اكثر" : "learn more"}</a>
          </div>
          <div className="hero-slider">
            <Swiper
              autoplay={{ delay: 5000 }}
              loop={true} // Enable loop
              effect="cards"
              onSwiper={setHeroSwiper}
              grabCursor
              onSlideChange={handleSlideChange}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {heroData.map((festival, index) => (
                <SwiperSlide key={index}>
                  <img src={festival.image} alt={festival.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="tab-area">
          {heroData.map((festival, index) => (
            <div key={index} className={`tab-item ${activeIndex === index ? "active" : ""}`} onClick={() => handleTabClick(index)}>
              <div className="tab-title">{festival.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
