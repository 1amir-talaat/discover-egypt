import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "./Carousel.css";
import { useLanguage } from "../../context/LanguageContext";
function Carousel() {
  const { language } = useLanguage();
  // to handle prev and next buttons
  const [carouselSwiperRef, setCarouselSwiperRef] = useState(null);
  const prevHandler = () => {
    carouselSwiperRef.slidePrev();
  };

  const nextHandler = () => {
    carouselSwiperRef.slideNext();
  };

  ///////////////////////////
  // for doing the text animation
  useEffect(() => {
    if (carouselSwiperRef) {
      //checking if the slide is active because if the state is true so slide is active
      carouselSwiperRef.on("slideChange", () => {
        const animatedElements = document.querySelectorAll(".animated"); //getting tags with class animated (the number of created elements in the loop based on the data)
        animatedElements.forEach((element) => {
          element.style.animation = "none"; // without it the animation will start from the center so there is no animation in the other slides only in first so i force the browser to recalculate the animation
          requestAnimationFrame(() => {
            element.style.animation = "fadeInUp 0.7s ease-in-out forwards";
          });
        });
      });
    }
    return () => {
      if (carouselSwiperRef) {
        carouselSwiperRef.off("slideChange");
      }
    };
  }, [carouselSwiperRef]);
  ////////////////////////////////////////////
  // by seif
  const data =
    language == "en"
      ? [
          {
            id: 1,
            img: "https://images.adsttc.com/media/images/64a2/cdae/cb9c/464f/a63a/9764/large_jpg/cairo-architecture-city-guide-exploring-the-unique-architectural-blend-of-historical-and-contemporary-in-egypts-bustling-capital_23.jpg?1688391095",
            country: "cairo",
            desc: "Cairo is the capital and largest city of Egypt. The city's metropolitan area is the largest in the Middle East and the Arab world, and 15th-largest in the world",
          },
          {
            id: 2,
            img: "https://www.osiristours.com/wp-content/uploads/2016/06/Alexandria-9-e1488051126787.jpg",
            country: "Alex",
            desc: "One of Egypt's largest cities, Alexandria is also its principal seaport and a major industrial centre. Alex lies on the Mediterranean Sea at the western edge of the Nile River delta,",
          },
          {
            id: 3,
            img: "https://swiperjs.com/demos/images/nature-3.jpg",
            country: "Dahab",
            desc: "Dahab has some of Egypt's most spectacular reefs for diving and snorkelling along with its golden sandy beaches ",
          },
          {
            id: 4,
            img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/10/48/07/d5.jpg",
            country: "hurghada",
            desc: "hurghada's beautiful sandy beaches and turquoise crystalline waters and watersports fans will be a big fan of the many opportunities for diving and snorkelling here amongst the vibrant marine life",
          },
        ]
      : [
          {
            id: 1,
            img: "https://images.adsttc.com/media/images/64a2/cdae/cb9c/464f/a63a/9764/large_jpg/cairo-architecture-city-guide-exploring-the-unique-architectural-blend-of-historical-and-contemporary-in-egypts-bustling-capital_23.jpg?1688391095",
            country: "القاهرة",
            desc: "القاهرة هي عاصمة مصر وأكبر مدنها. تعد المنطقة الحضرية للمدينة هي الأكبر في الشرق الأوسط والعالم العربي والمرتبة 15 على مستوى العالم",
          },
          {
            id: 2,
            img: "https://www.osiristours.com/wp-content/uploads/2016/06/Alexandria-9-e1488051126787.jpg",
            country: "الاسكندرية",
            desc: "تعتبر الإسكندرية إحدى أكبر مدن مصر، وهي أيضًا ميناء بحري رئيسي ومركز صناعي رئيسي. تقع المدينة على البحر الأبيض المتوسط ​​على الطرف الغربي لدلتا نهر النيل",
          },
          {
            id: 3,
            img: "https://swiperjs.com/demos/images/nature-3.jpg",
            country: "دهب",
            desc: "تضم دهب بعضًا من أروع الشعاب المرجانية في مصر لممارسة رياضة الغوص والغطس إلى جانب شواطئها الرملية الذهبية",
          },
          {
            id: 4,
            img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/10/48/07/d5.jpg",
            country: "الغردقة",
            desc: "ستكون شواطئ الغردقة الرملية الجميلة والمياه البلورية الفيروزية وعشاق الرياضات المائية من أشد المعجبين بالفرص العديدة للغوص والغطس هنا وسط الحياة البحرية النابضة بالحياة.",
          },
        ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        onSwiper={(swiper) => setCarouselSwiperRef(swiper)}
        modules={[EffectFade, Navigation, Pagination]}
        loop={true}
        className="mySwiper"
      >
        {data.map((el) => {
          return (
            <>
              <SwiperSlide key={el.id} className="carousel-element">
                <img src={el.img} className="carousel-img" />
                <div className="container carousel-cont">
                  {/* the content  */}
                  <div className="carousel-content">
                    {/* the carousel header  */}
                    <h1 className="carousel-header ">
                      {language == "en"
                        ? "Winter Destinations in Egypt "
                        : "وجهات الشتاء في مصر"}
                    </h1>
                    <hr />
                    {/* end of the header  */}
                    {/* //////////////// */}
                    {/* the container of the buttons and description */}
                    <div className="d-flex justify-content-between flex-cont">
                      {/* description  */}
                      <div className="carousel-texts">
                        <div className="animated">
                          <h3>{el.country}</h3>
                          <div className="desc-container">
                            <p>{el.desc}</p>
                          </div>
                          <button className="explore">
                            {language == "en" ? "Explore " : "استكشف"}
                            <div className="arrow-wrapper">
                              <div className="arrow"></div>
                            </div>
                          </button>
                        </div>
                      </div>
                      {/* description end */}
                      <div className="carousel-buttons align-self-center">
                        <button onClick={prevHandler} className="d-block">
                          {"<"}
                        </button>
                        <button onClick={nextHandler}>{">"}</button>
                      </div>
                    </div>
                  </div>
                  {/* end content  */}
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}

export default Carousel;
