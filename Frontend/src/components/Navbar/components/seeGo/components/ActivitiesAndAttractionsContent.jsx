import { useLanguage } from "../../../../../context/LanguageContext";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineGroups } from "react-icons/md";

const data = {
  ar: [
    {
      title: "المغامرة",
      image: "https://www.visitsaudi.com/content/dam/no-dynamic-media-folder/nav-images/adventurenavigation.png",
    },
    {
      title: "البحر",
      image: "https://www.visitsaudi.com/content/dam/home-page/sun-and-sea-desktop-full-image.jpg",
    },
    {
      title: "الآثار والحضارة",
      image:
        "https://cdn.alweb.com/thumbs/hadaarah/article/fit710x532/%D8%AA%D8%B9%D8%B1%D9%81-%D8%B9%D9%84%D9%89-%D8%A3%D8%A8%D8%B1%D8%B2-%D8%A7%D9%84%D8%A2%D8%AB%D8%A7%D8%B1-%D8%A7%D9%84%D9%81%D8%B1%D8%B9%D9%88%D9%86%D9%8A%D8%A9.jpg",
    },
    {
      title: "الثقافة",
      image: "https://scth.scene7.com/is/image/scth/RamadaninJeddah2?defaultImage=RamadaninJeddah2",
    },
  ],
};

function ActivitiesAndAttractionsContent() {
  const { language } = useLanguage();
  return (
    <div>
      <div className="activities">
        <div className="activities-header d-flex align-items-center justify-content-between py-3">
          <h5>{language == "ar" ? "التصفح حسب الفئة" : "Browse by categories"}</h5>
          <a href="#" className="gap-4">
            <span>{language == "ar" ? "اعرف أكثر" : "Learn More"}</span>
            <IoIosArrowBack className="arrow" />
          </a>
        </div>
        <div className="activities-body row">
          {data[language].map((d, index) => {
            return (
              <div className="activities-card-contianer w-50" key={index}>
                <div className="activities-card">
                  <img className="w-100" src={d.image} alt="" />
                  <div className="shodo"></div>
                  <div className="activities-ico">
                    <MdOutlineGroups size={25} />
                  </div>
                  <h5>{d.title}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ActivitiesAndAttractionsContent;
