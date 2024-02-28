import { useState, useEffect } from "react";
import axios from "axios";
import { useLanguage } from "../../context/LanguageContext";
import Places from "../Home/Places";
import heroVideo from "./video/NatureAndAdventure.mp4";
import "./NatureAndAdventure.css";
import Card from "../Card/Card";

function NatureAndAdventure() {
  const { language } = useLanguage();

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/category/Civilization");
        const data = await response.json();
        setPlaces(data[language]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [language]);

  console.log(places);

  return (
    <>
      <div className="video-box">
        <video loop muted autoPlay playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row mb-5">
          <h1 style={{ fontSize: 42 }}>{language == "en" ? "Exploring the natural wonders of Egypt" : "استكشاف العجائب الطبيعية في مصر"}</h1>
          <h4 style={{ fontSize: 21, color: "#333333" }}>
            {language == "en"
              ? "Discover the natural wonders and limitless adventure of Egypt. From the stunning landscapes of the Sahara Desert to the dramatic valleys of the Sinai Peninsula, Egypt offers an unparalleled playground for outdoor enthusiasts. Embark on an exhilarating desert safari, where towering sand dunes stretch as far as the eye can see. For those seeking adrenaline-fueled thrills, trekking through the Sinai valleys promises unforgettable experiences. With its diverse terrain and endless adventure opportunities, Egypt invites travelers to immerse themselves in natural beauty and the excitement of the outdoors."
              : "اكتشف العجائب الطبيعية والمغامرات التي لا حدود لها في مصر. من المناظر الطبيعية الخلابة في الصحراء الكبرى إلى الوديان المثيرة في شبه جزيرة سيناء، توفر مصر ملعبًا لا مثيل له لعشاق الهواء الطلق. انطلق في رحلة سفاري صحراوية مبهجة، حيث تمتد الكثبان الرملية الشاهقة على مد البصر. بالنسبة لأولئك الذين يبحثون عن الإثارة التي تغذيها الأدرينالين، فإن الرحلات عبر وديان سيناء تعد بتجارب لا تنسى. بفضل تضاريسها المتنوعة وفرص المغامرة التي لا نهاية لها، تدعو مصر المسافرين إلى الانغماس في الجمال الطبيعي والإثارة في الهواء الطلق."}
          </h4>
        </div>
        <div className="row">
          <h1 style={{ fontSize: 42 }}>{language == "en" ? "Discover the Nature of Egypt" : "اكتشف الطبيعة في مصر    "}</h1>

          <Card data={places} />
        </div>
      </div>
      <Places />
    </>
  );
}

export default NatureAndAdventure;
