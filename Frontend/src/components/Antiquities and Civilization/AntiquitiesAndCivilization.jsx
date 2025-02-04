import Places from "../Home/Places";
import { useLanguage } from "../../context/LanguageContext";
import heroVideo from "./video/AntiquitiesAndCivilization.mp4";
import "./AntiquitiesAndCivilization.css";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

function AntiquitiesAndCivilization() {
  const { language } = useLanguage();

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("import.meta.env.VITE_HOSTcategory/Antiquities");
        const data = await response.json();
        setPlaces(data[language]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [language]);

  return (
    <>
      <div className="video-box">
        <video loop muted autoPlay playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row mb-5">
          <h1 style={{ fontSize: 42 }}>{language == "en" ? "Uncover the wonders of ancient Egypt" : "اكتشف عجائب مصر القديمة"}</h1>
          <h4 style={{ fontSize: 21, color: "#333333" }}>
            {language == "en"
              ? "Egypt's rich heritage of antiquities and civilization is a marvel worth seeing. From the famous Pyramids of Giza to the mysterious Great Sphinx, these ancient wonders offer a glimpse into Egypt's great past. Along the fertile banks of the Nile River, the ancient Egyptians flourished, leaving behind treasures like hieroglyphs and artifacts that reveal their culture and remarkable creativity. Today, Egypt's ruins continue to captivate the world, showcasing a civilization that has stood the test of time."
              : "يعد تراث مصر الغني بالآثار والحضارة أعجوبة تستحق المشاهدة. من أهرامات الجيزة الشهيرة إلى تمثال أبو الهول الغامض، تقدم هذه العجائب القديمة لمحة عن ماضي مصر العظيم. على طول ضفاف نهر النيل الخصبة، ازدهر قدماء المصريين، تاركين وراءهم كنوزًا مثل الكتابة الهيروغليفية والتحف التي تكشف عن ثقافتهم وإبداعهم الرائع. واليوم، لا تزال آثار مصر تأسر العالم، حيث تعرض حضارة صمدت أمام اختبار الزمن."}
          </h4>
        </div>
        <div className="row">
          <h1 style={{ fontSize: 42 }}>{language == "en" ? "Discover the civilization of Egypt" : "اكتشف حضارة مصر    "}</h1>
          <Card data={places} />
        </div>
      </div>
      <Places />
    </>
  );
}

export default AntiquitiesAndCivilization;
