import { useEffect } from "react";
import "./AboutEgypt.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLanguage } from "../../context/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import SwiperCore from "swiper";
import Bar from "../Bar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "../Home/Events.css";
import "swiper/css/effect-cards";
import AboutData from "./AboutEgypt.json";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function AboutEgypt() {
  // swiper
  const [swiperRef, setSwiperRef] = useState(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const { language } = useLanguage();
  let data = AboutData[language];
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    updateProgress(swiper.realIndex, swiper.slides.length);
  };

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  const updateProgress = (activeIndex, totalSlides) => {
    const progress = (activeIndex / totalSlides) * 100;
    setProgress(progress);
  };
  //adding aos
  useEffect(() => {
    AOS.init();
  }, []);
  //handling languages
  return (
    <>
      {/* image and text  */}
      <div className="image-container">
        <img
          src="https://images.pexels.com/photos/18887144/pexels-photo-18887144/free-photo-of-tropical-resort-on-a-desert-in-egypt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h1 className={language == "en" ? "image-text-en" : "image-text-ar"}>
          {language == "en" ? "About Egypt" : "معلومات حول مصر"}
        </h1>
      </div>
      {/* traditions part */}
      <div className="container mt-5">
        {/* a container for animation */}
        <div
          data-aos={language == "en" ? "fade-left" : "fade-right"}
          data-aos-duration="1500"
        >
          <h1>
            {language == "en" ? "Traditions of Egypt" : "التقاليد المصرية"}
          </h1>
          {/* the content and image container  */}
          <div className="d-flex traditinos">
            <img
              src="https://images.pexels.com/photos/6782583/pexels-photo-6782583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="traditions-texts align-self-center ">
              <div className="container">
                <h4 className="text-center">
                  {" "}
                  {language == "en" ? "language" : "اللغة"}
                </h4>
                <p>
                  {language == "ar"
                    ? "تتميز الهجة المصرية بتنوعها اللغوي وثراها الثقافي، حيث تعكس تاريخًا عريقًا وتنوعًا ثقافيًا غنيًا. تتضمن اللهجة المصرية مجموعة من العبارات والتعابير الشهيرة التي يستخدمها الناس في حياتهم اليومية، مما يمنحها طابعًا فريدًا وممتعًا. بفضل تراثها الغني، تعد الهجة المصرية مصدر إلهام للأدب والفن، وتعكس جوهر الثقافة المصرية بشكل لافت ومميز."
                    : "The Egyptian dialect is known for its linguistic diversity and rich cultural heritage, reflecting a long history and a vibrant cultural tapestry. It includes a variety of famous phrases and expressions commonly used in everyday life, giving it a unique and enjoyable character. Thanks to its rich heritage, the Egyptian dialect serves as a source of inspiration for literature and art, vividly reflecting the essence of Egyptian culture."}
                </p>
              </div>
            </div>
          </div>
          {/* end of content and image conatiner  */}
        </div>
      </div>
      {/* end tradition  */}
      {/* culture part */}
      <div className="container mt-5">
        {/* a container for animation */}
        <div
          data-aos={language == "en" ? "fade-right" : "fade-left"}
          data-aos-duration="1500"
        >
          {/* the content and image container  */}
          <div className="d-flex traditinos">
            <div className="traditions-texts align-self-center ">
              <div className="container">
                <h4 className="text-center">
                  {" "}
                  {language == "en" ? "Culture" : "الثقافة"}
                </h4>
                <p>
                  {language == "ar"
                    ? "ثقافة مصر تعكس تنوعها الثقافي والتاريخي الغني، حيث تتجلى في التراث الفرعوني العريق والفنون الشعبية والأدب والموسيقى والمطبخ الشهير. تمزج الثقافة المصرية بين العراقة والحداثة، حيث تحتفظ بتقاليدها وتقاليدها القديمة مع استيعابها للتأثيرات العالمية المعاصرة. يشكل الدين والأسرة جزءًا أساسيًا من الهوية المصرية، وتتجلى قيم الضيافة والتضامن في المجتمع المصري."
                    : "Egypt's culture is characterized by its rich cultural and historical diversity, as it is reflected in the ancient Pharaonic heritage, folk and literary arts, music and cuisine. The Egyptian Culture Association is between tradition and modernity, as it maintains its ancient traditions and traditions while absorbing contemporary global influences. The value of religion and family is an essential part of Egyptian identity, and hospitality and solidarity are evident throughout Egyptian society."}
                </p>
              </div>
            </div>
            <img
              src="https://images.pexels.com/photos/2482317/pexels-photo-2482317.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          {/* end of content and image conatiner  */}
        </div>
      </div>
      {/* end culture part */}
      {/* Laws & Etiquette */}
      <div className="container mt-5 mb-2">
        <h1 style={{ fontSize: 42, marginTop: 100, marginBottom: 50 }}>
          {language == "en" ? "Laws & Etiquette" : "الآداب العامة"}
        </h1>
      </div>
      <div className="events position-relative mb-3">
        <div className="slide">
          <Swiper
            grabCursor={true}
            onSlideChange={handleSlideChange}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={20}
            loop={true}
            initialSlide={0}
            onSwiper={(swiper) => setSwiperRef(swiper)}
            scrollbar={{ draggable: true }}
          >
            {data.map((d, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="swiper-slide-content">
                    <img
                      style={
                        d.image ==
                        "https://upload.wikimedia.org/wikipedia/commons/a/aa/Marina_egypt_haddara.jpg"
                          ? { objectPosition: "bottom" }
                          : {}
                      }
                      src={d.image}
                      alt={d["title"]}
                      className="cov-img"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="event-info">
          <Bar />
          <div
            className={` info d-flex flex-column  ${
              language == "en" ? "event-info-right" : ""
            }`}
          >
            <div className="info-data flex-grow-1">
              <h1>{data[activeIndex % data.length].title}</h1>
              <p className="p-info">
                {data[activeIndex % data.length].description}
              </p>
              <button className="info-btn">
                {language == "ar" ? "عرض المزيد" : "show more"}
              </button>
            </div>
          </div>
          <div className="info-buttons flex-grow-0 d-flex">
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{
                  width: `${progress}%`,
                  backgroundColor: "red",
                  height: "10px",
                }}
              ></div>
            </div>
            <div className="events-buttons">
              <button onClick={prevHandler}>{"<"}</button>
              <button onClick={nextHandler}>{">"}</button>
            </div>
          </div>
        </div>
      </div>
      {/* end Laws & Etiquette  */}
      {/* currency and payments part */}
      <div className="container mt-5 mb-5">
        {/* a container for animation */}
        <div
          data-aos={language == "en" ? "fade-left" : "fade-right"}
          data-aos-duration="1500"
        >
          <h1>
            {language == "en" ? "Currency & Payments" : "العملة والمدفوعات"}
          </h1>
          {/* the content and image container  */}
          <div className="d-flex traditinos">
            <img
              src="https://images.pexels.com/photos/5609738/pexels-photo-5609738.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="traditions-texts align-self-center ">
              <div className="container">
                <h4 className="text-center">
                  {" "}
                  {language == "en"
                    ? "Exchange and transactions"
                    : "التبادل والمعاملات"}
                </h4>
                <p>
                  {language == "ar"
                    ? "صرف العملات والمعاملات سهلة في مصر. العملة الوطنية المصرية هي الجنيه المصري، وينقسم إلى خمسة جنيهات. ستتلقى أوراقًا نقدية من فئات عشرة جنيهات، وعشرين جنيهًا، وخمسين جنيهًا، ومائة جنيه، ومائتي جنيه؛ والعملات المعدنية: الريال الواحد، والريالان، والجنيه الواحد، وخمسون قرشا، وخمسة وعشرون قرشا."
                    : "Currency exchange and transactions are easy in Egypt. Egypt national currency is the Egyptian pound  (L.E), which is subdivided into Five pounds.You’ll receive notes in denominations of Ten pounds, Twenty pounds  Fifty pounds, One hundred pounds and Two hundred pounds; and coins in one riyal, two riyals, One pound, Fifty piastres, Twenty-five piastres."}
                </p>
              </div>
            </div>
          </div>
          {/* end of content and image conatiner  */}
        </div>
        {/* cards of currency part */}
        <div className="card-cont mb-5">
          <div className="row">
            <div className="col-md-12 col-lg-4 mb-2">
              <div className="cur-card">
                <h5>
                  {language == "en" ? "Currency Exchange" : "تحويل العملات"}
                </h5>
                <p>
                  {language == "en"
                    ? "All banks in Egypr offer currency exchange services. Exchangebureaus are located at airports, some shopping centers and various other locations throughout the country. Credit card such as Visa, MasterCard and American Express are accepted throughout the kingdom. ATMs are also widely available, but the exchange must be from foreign currency to egyption currency."
                    : "جميع البنوك في مصر تقدم خدمات صرف العملات. تبادل تقع المكاتب في المطارات وبعض مراكز التسوق و مواقع أخرى مختلفة في جميع أنحاء البلاد. بطاقة إئتمان، يتم قبول بطاقات مثل Visa وMasterCard وAmerican Express في جميع أنحاء المملكة. أجهزة الصراف الآلي متاحة أيضًا على نطاق واسع، ولكن يجب أن يكون الصرف من العملة الأجنبية إلى مصر عملة."}
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 mb-2">
              <div className="cur-card">
                <h5>
                  {language == "en"
                    ? "Send and receive money"
                    : "إرسال واستقبال الأموال"}
                </h5>
                <p>
                  {language == "en"
                    ? "You can send or receive money in Egypt by transferring funds online or through a bank that offers fast money transfer services."
                    : "يمكنك إرسال أو استقبال الأموال في مصر عن طريق تحويل الأموال عبر الإنترنت أو من خلال أحد البنوك التي تقدم خدمة تحويل الأموال بسرعة خدمات."}
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 mb-2">
              <div className="cur-card">
                <h5>{language == "en" ? "Taxes" : "الضرائب"}</h5>
                <p>
                  {language == "en"
                    ? "Egypt imposes an indirect tax of 15% (VAT) on all goods and services purchased and sold by enterprises. There are some exceptions."
                    : "تفرض مصر ضريبة غير مباشرة بنسبة 15% على جميع السلع والخدمات التي يتم شراؤها وبيعها من قبل الشركات. هناك بعض استثناءات."}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* end cards*/}
        {/* explore more  */}
        <div className="row mt-5">
          <h2 className="mt-4 mb-2">
            {language == "en" ? "Keep exploring" : "استمر في الاستكشاف"}
          </h2>
          <div className="col-sm-12 col-md-4">
            <div className="card experience-card border-0 shadow w-100 position-relative mb-5">
              <img
                className="card-img-top experience-card-image"
                src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=600"
                // alt={item.description}
              />
              <div className="card-body">
                <div className="experience-card-badge">
                  {/* <h5>{item.country}</h5> */}
                </div>
                <h4>
                  {language == "en" ? "Travel Regulations" : "لوائح السفر"}
                </h4>
                <p style={{ color: "gray", fontSize: 20 }}>
                  {/* {language === "en"
                ? `Price Start From ${item.price} $`
                : `السعر يبدأ من ${item.price * 4} جنيه`} */}
                </p>
              </div>
              <hr className="experience-card-hr mt-4 ms-3" />
              <button
                className="btn fw-bold"
                style={{ color: "rgb(83, 187, 123)" }}
              >
                <h5>{language === "en" ? "Book Now" : "أحجز الآن"}</h5>
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="card experience-card border-0 shadow w-100 position-relative mb-5">
              <img
                className="card-img-top experience-card-image"
                src="https://images.pexels.com/photos/6272245/pexels-photo-6272245.jpeg?auto=compress&cs=tinysrgb&w=600"
                // alt={item.description}
              />
              <div className="card-body">
                <div className="experience-card-badge">
                  {/* <h5>{item.country}</h5> */}
                </div>
                <h4>
                  {language == "en"
                    ? "safety travel tips"
                    : "نصائح السفر الآمن"}
                </h4>
                <p style={{ color: "gray", fontSize: 20 }}>
                  {/* {language === "en"
                ? `Price Start From ${item.price} $`
                : `السعر يبدأ من ${item.price * 4} جنيه`} */}
                </p>
              </div>
              <hr className="experience-card-hr mt-4 ms-3" />
              <button
                className="btn fw-bold"
                style={{ color: "rgb(83, 187, 123)" }}
              >
                <h5>{language === "en" ? "Book Now" : "أحجز الآن"}</h5>
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="card experience-card border-0 shadow w-100 position-relative mb-5">
              <img
                className="card-img-top experience-card-image"
                src="https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=600"
                // alt={item.description}
              />
              <div className="card-body">
                <div className="experience-card-badge">
                  {/* <h5>{item.country}</h5> */}
                </div>
                <h4>
                  {language == "en" ? "Useful Contacts" : "اتصالات مفيدة"}
                </h4>
                <p style={{ color: "gray", fontSize: 20 }}>
                  {/* {language === "en"
                ? `Price Start From ${item.price} $`
                : `السعر يبدأ من ${item.price * 4} جنيه`} */}
                </p>
              </div>
              <hr className="experience-card-hr mt-4 ms-3" />
              <button
                className="btn fw-bold"
                style={{ color: "rgb(83, 187, 123)" }}
              >
                <h5>{language === "en" ? "Book Now" : "أحجز الآن"}</h5>
              </button>
            </div>
          </div>
        </div>
        {/* end explore more  */}
      </div>
      {/* end currency and payments part */}
    </>
  );
}

export default AboutEgypt;
