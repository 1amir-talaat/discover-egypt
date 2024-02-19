import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

import "./Navbar.css";
import logo from "../logo.png";

import { LuUser } from "react-icons/lu";
import { MdLanguage } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import Manu from "./components/Manu";
import SeeGo from "./components/SeeGo";

function SlideAnimation() {
  const { language, toggleLanguage } = useLanguage();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [navType, setNavType] = useState(null);

  
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    setDropdownVisible(activeDropdown === dropdown ? false : true);
  };

  const dropdownClass = `dropdown-nav ${dropdownVisible ? "visible transition" : ""}`;

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
    switch (type) {
      case "See & Do":
        return (
          <Manu type={setNavType} data={["Explore All", " Destinations", "Activities & Attractions", " Food & Drink", " Experiences & Tours"]} />
        );
      case "Plan Your Trip":
        return (
          <Manu
            type={setNavType}
            data={[
              language === "ar" ? "تصفح الكل" : "Explore All",
              language === "ar" ? "مخطط الرحلات" : "Trip Planner",
              language === "ar" ? "وسائل النقل" : "Transportation",
              language === "ar" ? "دليل الرحلات بالسيارة" : "Road Trip Guide",
            ]}
          />
        );
      case "Travel Essentials":
        return (
          <Manu
            type={setNavType}
            data={[
              language === "ar" ? "تصفح الكل" : "Explore All",
              language === "ar" ? "معلومات حول السعودية" : "About Saudi",
              language === "ar" ? "نصائح السفر الآمن" : "Safety Travel Tips",
              language === "ar" ? "أرقام مفيدة" : "Useful Contacts",
              language === "ar" ? "إرشادات ومتطلبات السفر" : "Travel Regulations",
            ]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="position-relative">
        <nav className="top-nav">
          <div className="container">
            <p>{language === "ar" ? "تواصل معنا" : "Contact us"}</p>
            <p className="change-lang" onClick={toggleLanguage} style={{ fontSize: 18 }}>
              <MdLanguage className="mx-1" />
              <span>{language === "ar" ? "en" : "ar"}</span>
            </p>
          </div>
        </nav>
        <div className="navbar-contaner">
          <div className="container h-100">
            <nav className="nav">
              <div className="logo">
                <img className={language === "ar" ? "logo-ar" : "logo-en"} src={logo} alt="" />
              </div>
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
                <div className={`nav-link ${activeDropdown === "Saudi Calendar" ? "active" : ""}`}>
                  {language === "ar" ? "تقويم الفعاليات" : "Saudi Calendar"}
                </div>
              </div>
              <div className="nav-end">
                <div className="nav-ico">
                  <IoSearch size={21} />
                </div>
                <div className="nav-ico">
                  <LuUser size={21} />
                </div>
                <a href="#">{language == "ar" ? "تقديم طلب تأشيرة" : "Apply for eVisa"}</a>
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

export default SlideAnimation;
