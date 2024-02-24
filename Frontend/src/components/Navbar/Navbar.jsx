import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useLocation, useNavigate } from "react-router-dom";

import "./Navbar.css";
import logo from "./logo.png";

import { LuUser } from "react-icons/lu";
import { MdLanguage } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import Manu from "./components/Manu";
import SeeGo from "./components/seeGo/SeeGo";
import PlanYourTrip from "./components/planYourTrip/planYourTrip";
import TravelEssentials from "./components/travelEssentials/TravelEssentials";

const data = {
  ar: [
    {
      id: 1,
      place_name: "أهرامات الجيزة",
      description: "زوروا الأهرامات الشهيرة في الجيزة، بما في ذلك الهرم الأكبر، وهرم خفرع، وهرم منقرع، وتمثال أبو الهول.",
      image: "https://images.pexels.com/photos/3522880/pexels-photo-3522880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      place_name: "شاطئ الغردقة",
      description: "وجهة شاطئية شهيرة مع حياة ليلية نابضة بالحياة ورياضات مائية.",
      price: "مجاناً",
      image: "https://mediaim.expedia.com/destination/1/3208131f06b5973425f78d0ba40b8880.jpg",
    },
    {
      id: 8,
      place_name: "واحة الفرافرة",
      description: "اكتشف جمال واحة الفرافرة الواقعة في الصحراء الغربية، والتي تضم مناظر طبيعية خلابة وبحيرات مالحة.",
      image: "https://jakadatoursegypt.com/wp-content/uploads/2020/12/Farafra-Oasis-Egypt.jpg",
    },
    {
      id: 9,
      place_name: "محمية جزيرة برمودا",
      description: "استمتع بالغطس ورؤية الحياة البحرية الغنية في محمية جزيرة برمودا، والتي تشمل أحواض مرجانية مذهلة وغواصات ساحرة.",
      image: "https://www.bermuda.com/wp-content/uploads/2014/09/CoopersIsland-BermudaAerialMedia.jpg",
    },
  ],
  en: [
    {
      id: 1,
      place_name: "Pyramids of Giza",
      description: "Visit the iconic Pyramids of Giza, including the Great Pyramid, the Pyramid of Khafre, the Pyramid of Menkaure, and the Sphinx.",
      image: "https://images.pexels.com/photos/3522880/pexels-photo-3522880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      place_name: "Hurghada",
      description: "Popular beach destination with vibrant nightlife and water sports.",
      price: "Free",
      image: "https://mediaim.expedia.com/destination/1/3208131f06b5973425f78d0ba40b8880.jpg",
    },
    {
      id: 8,
      place_name: "Farafra Oasis",
      description: "Discover the beauty of Farafra Oasis located in the Western Desert, which features stunning natural landscapes and salt lakes.",
      image: "https://jakadatoursegypt.com/wp-content/uploads/2020/12/Farafra-Oasis-Egypt.jpg",
    },
    {
      id: 9,
      place_name: "Bermuda Island Reserve",
      description:
        "Enjoy diving and seeing rich marine life in Bermuda Island Reserve, which includes stunning coral reefs and enchanting submarines.",
      image: "https://www.bermuda.com/wp-content/uploads/2014/09/CoopersIsland-BermudaAerialMedia.jpg",
    },
  ],
};
function Navbar() {
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [navType, setNavType] = useState(null);
  const [scrolling, setScrolling] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [onSearch, setOnSearch] = useState(false);
  const [serachValue, setSearchValue] = useState();
  const [searchHistory, setSearchHistory] = useState();
  const navigation = useNavigate();

  useEffect(() => {
    setActiveDropdown(null);
    setDropdownVisible(false);
    const searchHistoryFromLocalStorage = localStorage.getItem("searchHistory");
    const parsedSearchHistory = searchHistoryFromLocalStorage ? JSON.parse(searchHistoryFromLocalStorage) : [];
    setSearchHistory(parsedSearchHistory);

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
  }, [location]);

  useEffect(() => {
    let timer;
    if (dropdownVisible) {
      timer = setTimeout(() => {
        setContentVisible(true);
      }, 200);
    } else {
      setContentVisible(false);
    }

    return () => clearTimeout(timer);
  }, [dropdownVisible]);

  const toggleDropdown = (dropdown) => {
    setOnSearch(false);
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    setDropdownVisible(activeDropdown === dropdown ? false : true);
  };

  if (onSearch) {
    document.querySelector(".overlay-all").style.display = "block";
  } else {
    document.querySelector(".overlay-all").style.display = "none";
  }

  const toggleSearch = () => {
    setDropdownVisible(false);
    setActiveDropdown(null);
    setOnSearch(!onSearch);
  };

  const validPaths = ["/sea-magic", "/nature-and-adventure", "/antiquities-and-civilization", "/about-egypt", "/travel-tips", "/plan-your-trip","/help-support"];
  var navbarClass = validPaths.includes(location.pathname) ? (scrolling ? "navbar-home" : "") : "navbar-home";

  const dropdownClass = `dropdown-nav ${dropdownVisible ? "visible transition dropdown-show" : "dropdown-hide"}`;
  const stickyNav = location.pathname === "/coming-soon" ? "sticky-top" : "fixed-top";

  console.log(location.pathname);

  // eslint-disable-next-line react/prop-types
  const DropdownContent = ({ type }) => {
    switch (type) {
      case "See & Do":
        return <SeeGo type={navType} />;
      case "Plan Your Trip":
        return <PlanYourTrip />;
      case "Travel Essentials":
        return <TravelEssentials />;
      default:
        return null;
    }
  };

  document.addEventListener("closeOverlay", () => {
    setOnSearch(false);
  });

  const addToSearchHistory = (item) => {
    const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

    searchHistory.push(item);

    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

    setSearchHistory(searchHistory);
  };

  const deleteFromSearchHistory = (index) => {
    const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

    searchHistory.splice(index, 1);

    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

    setSearchHistory(searchHistory);
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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    addToSearchHistory(serachValue);
    if (serachValue.trim() !== "") {
      navigation(`/search-results?search=${encodeURIComponent(serachValue)}`);
    }
  };

  const handleRecentSearchClick = (searchQuery) => {
    setOnSearch(false);
    setSearchValue(searchQuery);
    navigation(`/search-results?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <>
      <div
        className={`nav-contaioner ${stickyNav} ${activeDropdown ? "bg-white nav-dark" : ""} navigation ${navbarClass} ${
          onSearch == true ? "nav-search" : ""
        }`}
      >
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
                <div className="nav-ico" onClick={toggleSearch}>
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
        <div className={`search-wrapper mb-3 container ${onSearch == true ? "serach-show" : ""} `}>
          <div className="input-search">
            <IoSearch size={21} className="ico-search" />
            <form className="w-100" onSubmit={handleSearchSubmit}>
              <input
                onChange={(e) => setSearchValue(e.target.value)}
                type="text"
                className="w-100"
                placeholder={`${language == "ar" ? "بحث" : "search"} ....`}
                maxLength="255"
              />
            </form>
          </div>
        </div>
        <div className={`search-dropdown ${onSearch == true ? "search-dropdown-show" : ""}`}>
          <div className="container">
            <div className="search-history">
              <div className="header mb-4 d-flex align-items-center justify-content-between">
                <h5 className="m-0">{language === "ar" ? "بحثت مؤخرا" : "Recently Searched"}</h5>
                <p
                  onClick={() => {
                    localStorage.setItem("searchHistory", []);
                  }}
                  className="m-0"
                >
                  {language === "ar" ? "مسح الكل" : "Clear All"}
                </p>
              </div>
              {searchHistory && searchHistory.length >= 1 ? (
                searchHistory.map((search, index) => {
                  return (
                    <div className="search-history-item d-flex align-items-center justify-content-between gap-3" key={index}>
                      <FaHistory />
                      <p className="flex-grow-1 m-0" style={{ fontSize: "14px" }} onClick={() => handleRecentSearchClick(search)}>
                        {search}
                      </p>
                      <MdDeleteForever onClick={() => deleteFromSearchHistory(index)} size={22} color="#838383" />
                    </div>
                  );
                })
              ) : (
                <div className="text-center" style={{ fontSize: "25px", color: "#99999" }}>
                  {language === "ar" ? "لا يوجد عناصر" : "No items available"}
                </div>
              )}
            </div>
            <div className="search-recomendation p-3 px-5">
              <h5 className="mb-4">{language === "ar" ? "رائج ومميز" : "Popular and Featured"}</h5>
              <div className="recomendation-items d-flex gap-3 ">
                {data[language].map((item) => {
                  return (
                    <div key={item.id} className="recomendation-item w-25">
                      <div className="shodo"></div>
                      <img style={{ width: "100%" }} src={item.image} alt="" />
                      <p>{item.place_name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={dropdownClass}>
          <div className="manue">
            <DropdownManue type={activeDropdown} />
          </div>
          <div className="contnet">{contentVisible && <DropdownContent type={activeDropdown} />}</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
