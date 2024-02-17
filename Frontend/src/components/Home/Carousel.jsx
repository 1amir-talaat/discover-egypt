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
  console.log(language);
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
            img: "https://media.gettyimages.com/id/145167188/photo/egypt-cairo-view-of-city.jpg?s=612x612&w=0&k=20&c=x6ALHX35T3_3ZVxMUViI8axN-D5seAYT3dKeSSH2Ztg=",
            country: "cairo",
            desc: "cairo is very beautiful country and i love it very much",
          },
          {
            id: 2,
            img: "https://www.osiristours.com/wp-content/uploads/2016/06/Alexandria-9-e1488051126787.jpg",
            country: "Alex",
            desc: "alex is beautiful and have a beautiful sea",
          },
          {
            id: 3,
            img: "https://swiperjs.com/demos/images/nature-3.jpg",
            country: "Dahab",
            desc: "beautiful and have mountains and sea and fish",
          },
          {
            id: 4,
            img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/10/48/07/d5.jpg",
            country: "hurghada",
            desc: "have a wonderfull sea and many tourists vist it every year",
          },
        ]
      : [
          {
            id: 1,
            img: "https://media.gettyimages.com/id/145167188/photo/egypt-cairo-view-of-city.jpg?s=612x612&w=0&k=20&c=x6ALHX35T3_3ZVxMUViI8axN-D5seAYT3dKeSSH2Ztg=",
            country: "القاهرة",
            desc: "القاهرة مدينة جميلة",
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
                    <h1 className="carousel-header ">{language == "en" ? "Winter Destinations in Egypt " : "وجهات الشتاء في مصر"}</h1>
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
