import { useEffect } from "react";
import "./AboutEgypt.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLanguage } from "../../context/LanguageContext";
function AboutEgypt() {
  //adding aos
  useEffect(() => {
    AOS.init();
  }, []);
  //handling languages
  const { language } = useLanguage();
  return (
    <div>
      {/* image and text  */}
      <div className="image-container">
        <img
          src="https://images.pexels.com/photos/18887144/pexels-photo-18887144/free-photo-of-tropical-resort-on-a-desert-in-egypt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h1 className={language == "en" ? "image-text-en" : "image-text-ar"}>
          {language == "en" ? "About Egypt" : "معلومات حول مصر"}
        </h1>
      </div>
      {/* traditions part */}
      <div className="container mt-5">
        {/* a container for animation */}
        <div
          data-aos={language == "en" ? "fade-right" : "fade-left"}
          data-aos-duration="1500"
        >
          <h1>
            {language == "en" ? "Traditions of Egypt" : "التقاليد المصرية"}
          </h1>
          <div className="d-flex traditinos">
            <img
              src="https://images.pexels.com/photos/6782583/pexels-photo-6782583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="traditions-texts"></div>
          </div>
        </div>
      </div>
      {/* end tradition  */}
    </div>
  );
}

export default AboutEgypt;
