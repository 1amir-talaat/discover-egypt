import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./Navbar.css";
function Navbar() {
  // by basmala
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  return language == "en" ? (
    //Navbar in English
    <div className="Navbar ">
      <span className="nav-logo">Discover Egypt</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">See & Do</a>
        <a href="/about">Plan Your Trip</a>
        <a href="/service">Travel Essentials</a>
        <a href="/contact">Egypt Calendar</a>
        <a href="/contact">Experiences</a>
        <a href="/contact">Egypt Map</a>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
  ) : (
    // Navbar in Arabic
    <div className="Navbar-Arabic ">
      <span className="nav-logo">اكتشف مصر</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">معالم وأنشطة</a>
        <a href="/about">خطط رحلتك</a>
        <a href="/service">أساسيات السفر</a>
        <a href="/contact">تقويم الفعاليات</a>
        <a href="/contact"> التجارب السياحية</a>
        <a href="/contact"> الخريطة التفاعلية</a>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar;
