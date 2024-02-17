import { useLanguage } from "../../context/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";

function Places() {
  const { language } = useLanguage();

  const data = {
    ar: [
      {
        title: "معلومات حول مصر",
        path: "/about-egypt",
        image: "https://www.visitsaudi.com/content/dam/messi/saudi-arabian-architecture.jpg",
      },
      {
        title: "نصائح السفر الآمن",
        path: "/travil-tips",
        image: "https://www.visitsaudi.com/content/dam/messi/a-family-walking-through-a-forest-of-palm-trees-in-saudi.jpg",
      },
      {
        title: "أرقام مهمة",
        path: "/important-numbers",
        image: "https://www.visitsaudi.com/content/dam/messi/a-train-station-in-saudi-arabia.jpg",
      },
    ],
    en: [
      {
        title: "About Saudi",
        path: "/about-egypt",
        image: "https://www.visitsaudi.com/content/dam/messi/saudi-arabian-architecture.jpg",
      },
      {
        title: "Safety Travel Tips",
        path: "/travil-tips",
        image: "https://www.visitsaudi.com/content/dam/messi/a-family-walking-through-a-forest-of-palm-trees-in-saudi.jpg",
      },
      {
        title: "Useful Contacts",
        path: "/important-numbers",
        image: "https://www.visitsaudi.com/content/dam/messi/a-train-station-in-saudi-arabia.jpg",
      },
    ],
  };

  return (
    <>
      <div className="container mt-5 mb-5">
        <h1 className="mb-4" style={{ fontSize: 50 }}>
          {language == "en" ? "Know Before You Go" : "تعرف على الأماكن قبل زيارتها"}
        </h1>
        <Swiper spaceBetween={40} slidesPerView={3} dir={language}>
          {data[language].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="card m-1 experience-card border-0 shadow-sm w-100 position-relative mb-5">
                <img className="card-img-top experience-card-image" src={item.image} alt={item.description} />
                <div className="card-body my-4 ">
                  <h2>{item.title}</h2>
                </div>
                <hr className="m-0 mb-1 m-auto experience-card-hr position-static" />
                <button className="btn fw-bold " style={{ color: "rgb(83, 187, 123)" }}>
                  <h5>{language === "en" ? "Know more" : "اعرف اكثر"}</h5>
                </button>
              </div>
            </SwiperSlide>
          ))}
          ;
        </Swiper>
      </div>
    </>
  );
}

export default Places;
