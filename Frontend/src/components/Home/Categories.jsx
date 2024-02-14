import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "../../context/LanguageContext";
import "./Categories.css";

function Categories() {
  const { language } = useLanguage();
  const langDirection = language=='en'?"ltr":"rtl";

  return (
    <div className="container">
      <h1 className="mb-4" style={{ fontSize: 50 }}>{language == "en" ? "Discover Egypt in a Variety of Ways" : "اكتشف مصر بعدة طرق"}</h1>
      <Swiper
        spaceBetween={15}
        breakpoints={{
          768: {
            slidesPerView: 1.5,
          },
          1200: {
            slidesPerView: 2.5,
          }, 1400: {
            slidesPerView: 3,
          },
        }}
        dir={langDirection}
        key={langDirection}
        >
        <SwiperSlide style={{ height: 600 }} dir='ltr '>
          <img className="w-100 rounded position-relative category-image" src="https://images.pexels.com/photos/3214972/pexels-photo-3214972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <h1 className={`text-white position-absolute ${language === "en" ? "category-title-en" : "category-title-ar"} `}>{language == "en" ? "Antiquities and Civilization" : "الآثار والحضارة"}</h1>
          <button className={`btn position-absolute ${language == "en" ? "category-button-en" : "category-button-ar"} `}>{language == "en" ? "Explore More" : "أستكشف أكثر"}</button>
        </SwiperSlide>

        <SwiperSlide style={{ height: 600 }} dir='ltr '>
          <img className="w-100 position-relative rounded category-image " src="https://images.pexels.com/photos/1755390/pexels-photo-1755390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <h1 className={`text-white position-absolute ${language === "en" ? "category-title-en" : "category-title-ar"} `}>{language == "en" ? "Nature and Adventure" : "الطبيعة والمغامرة"}</h1>
          <button className={`btn position-absolute ${language == "en" ? "category-button-en" : "category-button-ar"} `}>{language == "en" ? "Explore More" : "أستكشف أكثر"}</button>
        </SwiperSlide>

        <SwiperSlide style={{ height: 600 }} dir='ltr '>
          <img className="w-100 position-relative rounded category-image " src="https://images.pexels.com/photos/3264721/pexels-photo-3264721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <h1 className={`text-white position-absolute ${language === "en" ? "category-title-en" : "category-title-ar"} `}>{language == "en" ? "Sea Magic" : "سحر البحر"}</h1>
          <button className={`btn position-absolute ${language == "en" ? "category-button-en" : "category-button-ar"} `}>{language == "en" ? "Explore More" : "أستكشف أكثر"}</button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Categories;
