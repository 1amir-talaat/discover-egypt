import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "../../context/LanguageContext";
import "./Experience.css";

function Experience() {
  const { language } = useLanguage();
  const langDirection = language == 'en' ? "ltr" : "rtl";

  const testing_data = language == "en" ? [
    {
      "id": 1,
      "country": "Sharm El-Sheikh",
      "description": "Enjoy the beauty of Sharm El-Sheikh with its sandy beaches and coral reefs. Discover diving and water sports.",
      "price": "800",
      "image": "https://images.pexels.com/photos/18886592/pexels-photo-18886592/free-photo-of-view-of-the-sharm-el-maya-bay-in-sharm-el-sheikh-egypt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "id": 2,
      "country": "Cairo",
      "description": "Discover ancient wonders and modern life. Visit Pyramids, Egyptian Museum, and Khan El Khalili bazaar.",
      "price": "700",
      "image": "https://images.pexels.com/photos/3873663/pexels-photo-3873663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "id": 3,
      "country": "Sinai Peninsula",
      "description": "Venture to rugged mountains and ancient sites. Hike Mount Sinai, explore Saint Catherine's Monastery.",
      "price": "750",
      "image": "https://jakadatoursegypt.com/wp-content/uploads/2020/12/Sinai-Peninsula.jpg.webp"
    },
    {
      "id": 4,
      "country": "Dahab",
      "description": "Explore a coastal town with pristine beaches and coral reefs. Dive into the Blue Hole, enjoy beachfront cafes.",
      "price": "600",
      "image": "https://images.pexels.com/photos/17814812/pexels-photo-17814812/free-photo-of-aerial-view-of-buildings-on-the-shore-in-dahab-egypt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "id": 5,
      "country": "Abu Simbel",
      "description": "Journey to iconic temples. Marvel at colossal statues, explore decorated chambers.",
      "price": "700",
      "image": "https://images.pexels.com/photos/6322875/pexels-photo-6322875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "id": 6,
      "country": "Siwa Oasis",
      "description": "Escape to a tranquil oasis town. Explore mud-brick fortresses, bathe in hot springs.",
      "price": "750",
      "image": "https://images.pexels.com/photos/14065506/pexels-photo-14065506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "id": 7,
      "country": "Aswan",
      "description": "Experience serene Aswan by the Nile. Visit temples, sail on a felucca, and marvel at Nubian villages.",
      "price": "850",
      "image": "https://images.pexels.com/photos/18991541/pexels-photo-18991541/free-photo-of-a-blue-house-with-colorful-decorations-on-the-walls.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "id": 8,
      "country": "Luxor",
      "description": "Discover Luxor, an open-air museum with temples, the Valley of the Kings, and Nile cruises.",
      "price": "950",
      "image": "https://images.pexels.com/photos/15188088/pexels-photo-15188088/free-photo-of-precinct-of-amun-re-karnak-temple-complex-luxor-egypt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]
    : [
      {
        "id": 1,
        "country": "شرم الشيخ",
        "description": "استمتع بجمال شرم الشيخ مع شواطئه الرملية والشعاب المرجانية، واكتشف الغوص والرياضات المائية.",
        "price": "800",
        "image": "https://images.pexels.com/photos/18886592/pexels-photo-18886592/free-photo-of-view-of-the-sharm-el-maya-bay-in-sharm-el-sheikh-egypt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        "id": 2,
        "country": "القاهرة",
        "description": "اكتشف العجائب القديمة والحياة الحديثة. قم بزيارة الأهرامات والمتحف المصري وسوق خان الخليلي.",
        "price": "700",
        "image": "https://images.pexels.com/photos/3873663/pexels-photo-3873663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        "id": 3,
        "country": "شبه جزيرة سيناء",
        "description": "انطلق إلى الجبال الوعرة والمواقع الدينية القديمة. اصعد إلى قمة جبل سيناء واستكشف دير القديسة كاترين.",
        "price": "750",
        "image": "https://jakadatoursegypt.com/wp-content/uploads/2020/12/Sinai-Peninsula.jpg.webp"
      },
      {
        "id": 4,
        "country": "دهب",
        "description": "استكشف بلدة ساحلية مع شواطئ نقية وشعاب مرجانية. غطس في الحفرة الزرقاء واستمتع بالمقاهي على الشاطئ.",
        "price": "600",
        "image": "https://images.pexels.com/photos/17814812/pexels-photo-17814812/free-photo-of-aerial-view-of-buildings-on-the-shore-in-dahab-egypt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        "id": 5,
        "country": "أبو سمبل",
        "description": "انطلق في رحلة إلى المعابد الرائعة. اعجب بالتماثيل الضخمة واستكشف الحجرات المزخرفة.",
        "price": "700",
        "image": "https://images.pexels.com/photos/6322875/pexels-photo-6322875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        "id": 6,
        "country": "واحة سيوة",
        "description": "ابتعد عن الضجيج إلى بلدة واحة سيوة الهادئة. استكشف الحصون القديمة واغمس في الينابيع الساخنة.",
        "price": "750",
        "image": "https://images.pexels.com/photos/14065506/pexels-photo-14065506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        "id": 7,
        "country": "أسوان",
        "description": "استمتع بأسوان الهادئة على نهر النيل. زر المعابد، ابحر على فلوكا، وتعجب من قرى النوبة.",
        "price": "850",
        "image": "https://images.pexels.com/photos/18991541/pexels-photo-18991541/free-photo-of-a-blue-house-with-colorful-decorations-on-the-walls.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        "id": 8,
        "country": "الأقصر",
        "description": "اكتشف الأقصر، المتحف المفتوح بالهواء الطلق مع المعابد، ووادي الملوك، ورحلات نيلية.",
        "price": "950",
        "image": "https://images.pexels.com/photos/15188088/pexels-photo-15188088/free-photo-of-precinct-of-amun-re-karnak-temple-complex-luxor-egypt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }

    ];

  return (
    <div className="container mt-5 mb-5">
      <h1 className="mb-4" style={{ fontSize: 50 }}>{language == "en" ? "What to Experience in Egypt" : "نشاطات تستحق التجربة"}</h1>
      <Swiper
        spaceBetween={25}
        breakpoints={{
          0: {
            slidesPerView: 2.5,
          },
          1400: {
            slidesPerView: 3.5,
          },
        }}
        dir={langDirection}
        key={langDirection}
      >

        {testing_data.map((item, index) => (

          <SwiperSlide key={index}>
            <div className="card experience-card border-0 shadow-sm w-100 position-relative mb-5">
              <img className="card-img-top experience-card-image" src={item.image} alt={item.description} />
              <div className="card-body">
                <div className="experience-card-badge">
                  <h5>{item.country}</h5>
                </div>
                <h4>{item.description}</h4>
                <p style={{ color: "gray", fontSize: 20 }}>
                  {language === "en" ? `Price Start From ${item.price} $` : `السعر يبدأ من ${item.price * 4} جنيه`}
                </p>
              </div>
              <hr className="experience-card-hr mt-4 ms-3" />
              <button className="btn fw-bold" style={{ color: "rgb(83, 187, 123)" }}>
                <h5>{language === "en" ? "Book Now" : "أحجز الآن"}</h5>
              </button>
            </div>
          </SwiperSlide>
        ))};

      </Swiper>
    </div>
  );
}

export default Experience;
