import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useLocation, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

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

import { useAuth } from "../../context/AuthContext";

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
  const { user, logout } = useAuth();

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

  const validPaths = [
    "/sea-magic",
    "/nature-and-adventure",
    "/antiquities-and-civilization",
    "/about-egypt",
    "/travel-tips",
    "/plan-your-trip",
    "/help-support",
    "/important-numbers",
  ];
  var navbarClass = validPaths.includes(location.pathname) ? (scrolling ? "navbar-home" : "trans-nav") : "navbar-home";

  const dropdownClass = `dropdown-nav ${dropdownVisible ? "visible transition dropdown-show" : "dropdown-hide"}`;
  const stickyNav = location.pathname === "/coming-soon" ? "sticky-top" : "fixed-top";

  // console.log(location.pathname);

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
    if (item.trim() !== "") {
      let searchHistory;
      const searchHistoryFromLocalStorage = localStorage.getItem("searchHistory");
      try {
        searchHistory = JSON.parse(searchHistoryFromLocalStorage) || [];
      } catch (error) {
        searchHistory = [];
      }
      searchHistory.push(item);
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
      setSearchHistory(searchHistory);
    }
  };

  const deleteFromSearchHistory = (index) => {
    let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

    if (!Array.isArray(searchHistory)) {
      searchHistory = [];
    } else {
      searchHistory.splice(index, 1);
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
      setSearchHistory(searchHistory);
    }
  };
  // eslint-disable-next-line react/prop-types
  const DropdownManue = ({ type }) => {
    let data = {
      en: [],
      ar: [],
    };
    let path = [];

    switch (type) {
      case "See & Do":
        data = {
          en: ["Explore All", "Activities", "Food & Drink", "Experiences & Tours"],
          ar: ["تصفح الكل", "الأنشطة والمعالم السياحية", "المأكولات والمشروبات", "المغامرات والجولات"],
        };
        path = ["coming-soon", null, null, null];
        break;
      case "Plan Your Trip":
        data = {
          en: ["Explore All", "Trip Planner", "Transportation", "Road Trip Guide"],
          ar: ["تصفح الكل", "مخطط الرحلات", "وسائل النقل", "دليل الرحلات بالسيارة"],
        };
        path = ["plan-your-trip", "plan-your-trip", "coming-soon", "coming-soon"];
        break;
      case "Travel Essentials":
        data = {
          en: ["About Egypt", "Safety Travel Tips", "Useful Contacts"],
          ar: ["معلومات حول مصر", "نصائح السفر الآمن", "أرقام مفيدة"],
        };
        path = ["about-egypt", "travel-tips", "important-numbers"];
        break;
      default:
        break;
    }

    return <Manu type={setNavType} data={data} path={path} />;
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    addToSearchHistory(serachValue);
    if (serachValue.trim() !== "") {
      navigation("/coming-soon");
      // navigation(`/search-results?search=${encodeURIComponent(serachValue)}`);
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
                <a href="/coming-soon" className={`nav-link ${activeDropdown === "Egypt Calendar" ? "active" : ""}`}>
                  {language === "ar" ? "تقويم الفعاليات" : "Egypt Calendar"}
                </a>
              </div>
              <div className="nav-end">
                <div className="nav-ico" onClick={toggleSearch}>
                  <IoSearch size={21} />
                </div>
                {user ? (
                  <div className="nav-ico nav-logout" onClick={logout}>
                    <Logout />
                  </div>
                ) : (
                  <Link to={"/login"} className="nav-ico">
                    <LuUser size={21} />
                  </Link>
                )}

                <a className="apply" href="/willing-to-arrive">
                  {language === "ar" ? "ارغب بزيارته" : "Willing to Arrive"}
                </a>
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
                    localStorage.setItem("searchHistory", "[]");
                    setSearchHistory([]);
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
            <div className="search-recomendation p-3 px-5 ">
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

const Logout = () => {
  return (
    <div className="Logout">
      <button className="Btn">
        <div className="sign">
          <svg viewBox="0 0 512 512">
            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Navbar;
