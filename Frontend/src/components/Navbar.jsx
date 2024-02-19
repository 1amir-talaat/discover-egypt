import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./Navbar.css";


function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { path: "", textEn: "See & Do", textAr: "معالم وأنشطة" },
    { path: "", textEn: "Plan Your Trip", textAr: "خطط رحلتك" },
    { path: "", textEn: "Travel Essentials", textAr: "أساسيات السفر" },
    { path: "", textEn: "Egypt Calendar", textAr: "تقويم الفعاليات" },
    { path: "", textEn: "Experiences", textAr: "التجارب السياحية" },
    { path: "", textEn: "Egypt Map", textAr: "الخريطة التفاعلية" }
  ];

  const navbarClass = language === "en" ? "Navbar" : "Navbar-Arabic";
  const scrolledClass = scrolled ? "scrolled" : "";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className={`${navbarClass} fixed-top p-5 ${scrolledClass}`}>
      <a href="/" className="nav-logo text-decoration-none">{language === "en" ? "Discover Egypt" : "اكتشف مصر"}</a>
      <div className={`nav-items ${isOpen && "open"}`}>
        {navItems.map((item, index) => (
          <a key={index} href={item.path}>{language === "en" ? item.textEn : item.textAr}</a>
        ))}
        <button className="btn border-0" onClick={toggleLanguage}>
          <h6 className="d-inline text-white me-2 ms-2 lang-text">{language === "en" ? "English" : "عربي"}</h6>
          <svg className="lang-icon" width="30px" height="30px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="languageIconTitle" stroke="#FFF" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0" /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <title id="languageIconTitle">Language</title> <circle cx="12" cy="12" r="10" /> <path strokeLinecap="round" d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z" /> <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15" /> </g></svg>
        </button>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar;
