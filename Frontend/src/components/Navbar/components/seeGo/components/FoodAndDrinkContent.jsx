import { useLanguage } from "../../../../../context/LanguageContext";
import { IoIosArrowBack } from "react-icons/io";

const data = {
  ar: [
    {
      title: "رمضان في مصر",
      image: "https://www.visitsaudi.com/content/dam/no-dynamic-media-folder/manifest-newarticles-batch2/all-natural-squeezes/all-natural-hero.jpg",
    },
    {
      title: "الطعام في مصر: الإفطار والغداء والعشاء",
      image:
        "https://www.visitsaudi.com/content/dam/no-dynamic-media-folder/manifest-newarticles-batch1/09-saudi-cuisine-101/saudicuisine101_hero.jpg",
    },
    {
      title: "المطبخ الشرقاوي",
      image: "https://scth.scene7.com/is/image/scth/Sharqiya%20Local%20Cuisine%201",
    },
  ],
  en: [
    {
      title: "Ramadan in Egypt",
      image: "https://www.visitsaudi.com/content/dam/no-dynamic-media-folder/manifest-newarticles-batch2/all-natural-squeezes/all-natural-hero.jpg",
    },
    {
      title: "Food in Egypt: Breakfast, Lunch, and Dinner",
      image:
        "https://www.visitsaudi.com/content/dam/no-dynamic-media-folder/manifest-newarticles-batch1/09-saudi-cuisine-101/saudicuisine101_hero.jpg",
    },
    {
      title: "Eastern Cuisine",
      image: "https://scth.scene7.com/is/image/scth/Sharqiya%20Local%20Cuisine%201",
    },
  ],
};

function FoodAndDrinkContent() {
  const { language } = useLanguage();

  return (
    <div>
      <div className="activities">
        <div className="activities-header d-flex align-items-center justify-content-between py-3">
          <h5>{language == "ar" ? "أكلات لا تفوَّت" : "Must-Try Dishes"}</h5>
        </div>
      </div>
      <div className="foot-card-wrapper">
        {data[language].map((d, index) => {
          return (
            <div key={index} className="foot-card">
              <div className="foot-img">
                <img className="w-100" src={d.image} alt={d.title} />
              </div>
              <h5>{d.title}</h5>
              <a href="/coming-soon">
                <span>{language == "ar" ? "اعرف أكثر" : "Learn More"}</span>
                <IoIosArrowBack className="arrow" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FoodAndDrinkContent;
