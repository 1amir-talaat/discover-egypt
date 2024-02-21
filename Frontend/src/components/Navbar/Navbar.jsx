import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useLocation } from "react-router-dom";

import "./Navbar.css";
import logo from "../logo.png";

import { LuUser } from "react-icons/lu";
import { MdLanguage } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import Manu from "./components/Manu";
import SeeGo from "./components/seeGo/SeeGo";

function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [navType, setNavType] = useState(null);
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Reset dropdown on location change
    setActiveDropdown(null);
    setDropdownVisible(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    setDropdownVisible(activeDropdown === dropdown ? false : true);
  };

  const dropdownClass = `dropdown-nav ${dropdownVisible ? "visible transition dropdown-show" : "dropdown-hide"}`;
  const navbarClass = scrolling || location.pathname === "/" ? "navbar-home" : "";

  // eslint-disable-next-line react/prop-types
  const DropdownContent = ({ type }) => {
    switch (type) {
      case "See & Do":
        return <SeeGo type={navType} />;
      case "Plan Your Trip":
        return <div>Plan Your Trip Dropdown Content</div>;
      case "Travel Essentials":
        return <div>Travel Essentials Dropdown Content</div>;
      default:
        return null;
    }
  };

  // eslint-disable-next-line react/prop-types
  const DropdownManue = ({ type }) => {
    let data = {
      en: [],
      ar: [],
    };

    switch (type) {
      case "See & Do":
        data = {
          en: ["Explore All", "Activities", "Food & Drink", "Experiences & Tours"],
          ar: ["تصفح الكل", "الأنشطة والمعالم السياحية", "المأكولات والمشروبات", "المغامرات والجولات"],
        };
        break;
      case "Plan Your Trip":
        data = {
          en: ["Explore All", "Trip Planner", "Transportation", "Road Trip Guide"],
          ar: ["تصفح الكل", "مخطط الرحلات", "وسائل النقل", "دليل الرحلات بالسيارة"],
        };
        break;
      case "Travel Essentials":
        data = {
          en: ["Explore All", "About Saudi", "Safety Travel Tips", "Useful Contacts", "Travel Regulations"],
          ar: ["تصفح الكل", "معلومات حول السعودية", "نصائح السفر الآمن", "أرقام مفيدة", "إرشادات ومتطلبات السفر"],
        };
        break;
      default:
        break;
    }

    return <Manu type={setNavType} data={data} />;
  };

  return (
    <>
      <div className={`fixed-top ${activeDropdown ? "bg-white" : ""} navigation ${navbarClass}`}>
        <nav className="top-nav">
          <div className="container">
            <a href="/">{language === "ar" ? "تواصل معنا" : "Contact us"}</a>
            <p className="change-lang" onClick={toggleLanguage} style={{ fontSize: 18 }}>
              <MdLanguage className="mx-1" />
              <span>{language === "ar" ? "English" : "عربي"}</span>
            </p>
          </div>
        </nav>
        <div className="navbar-contaner">
          <div className="container h-100">
            <nav className="nav">
              <a href="/" className="logo">
                <img className={language === "ar" ? "logo-ar" : "logo-en"} src={logo} alt="" />
              </a>
              <div className="nav-links">
                <div onClick={() => toggleDropdown("See & Do")} className={`nav-link ${activeDropdown === "See & Do" ? "active" : ""}`}>
                  {language === "ar" ? "معالم وأنشطة" : "See & Do"}
                </div>
                <div onClick={() => toggleDropdown("Plan Your Trip")} className={`nav-link ${activeDropdown === "Plan Your Trip" ? "active" : ""}`}>
                  {language === "ar" ? "خطط رحلتك" : "Plan Your Trip"}
                </div>
                <div
                  onClick={() => toggleDropdown("Travel Essentials")}
                  className={`nav-link ${activeDropdown === "Travel Essentials" ? "active" : ""}`}
                >
                  {language === "ar" ? "أساسيات السفر" : "Travel Essentials"}
                </div>
                <div className={`nav-link ${activeDropdown === "Egypt Calendar" ? "active" : ""}`}>
                  {language === "ar" ? "تقويم الفعاليات" : "Egypt Calendar"}
                </div>
              </div>
              <div className="nav-end">
                <div className="nav-ico">
                  <IoSearch size={21} />
                </div>
                <div className="nav-ico">
                  <LuUser size={21} />
                </div>
                <a href="#">{language === "ar" ? "تقديم طلب تأشيرة" : "Apply for eVisa"}</a>
              </div>
            </nav>
          </div>
          <span className={`${dropdownVisible ? "show" : ""}`} />
        </div>
        <div className={dropdownClass}>
          <div className="manue">
            <DropdownManue type={activeDropdown} />
          </div>
          <div className="contnet">
            <DropdownContent type={activeDropdown} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
