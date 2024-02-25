import { useLanguage } from "../../../../context/LanguageContext";
import { FaArrowLeft } from "react-icons/fa";

function PlanYourTrip() {
  const { language } = useLanguage();
  return (
    <>
      <div className="article">
        <div className="article-card">
          <p>{language == "ar" ? "حان وقت العرض" : "Show time"}</p>
          <p>{language == "ar" ? "مهرجان القاهرة السينمائي" : "Cairo International Film Festival"}</p>
          <a href="#">
            <span>{language == "ar" ? "اعرف أكثر" : "Learn More"}</span>
            <FaArrowLeft className="arrow" />
          </a>
        </div>
        <div className="article-card">
          <p>{language == "ar" ? "حان وقت العرض" : "Show time"}</p>
          <p>{language == "ar" ? "مهرجان القاهرة السينمائي" : "Cairo International Film Festival"}</p>
          <a href="#">
            <span>{language == "ar" ? "اعرف أكثر" : "Learn More"}</span>
            <FaArrowLeft className="arrow" />
          </a>
        </div>
      </div>
    </>
  );
}

export default PlanYourTrip;
