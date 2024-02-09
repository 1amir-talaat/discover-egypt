import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "./carousel.css";
function Carousel() {
  const [swiperRef, setSwiperRef] = useState(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  // by seif
  const data = [
    {
      id: 1,
      img: "https://images.adsttc.com/media/images/64a2/cdae/cb9c/464f/a63a/9764/large_jpg/cairo-architecture-city-guide-exploring-the-unique-architectural-blend-of-historical-and-contemporary-in-egypts-bustling-capital_23.jpg?1688391095",
      country: "cairo",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, repellat impedit? Labore consectetur asperiores ea odio quo aperiam porro quae? Aliquid impedit velit obcaecati, ullam est perferendis rem corrupti eius!",
    },
    {
      id: 2,
      img: "https://www.osiristours.com/wp-content/uploads/2016/06/Alexandria-9-e1488051126787.jpg",
      country: "Alex",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, repellat impedit? Labore consectetur asperiores ea odio quo aperiam porro quae? Aliquid impedit velit obcaecati, ullam est perferendis rem corrupti eius!",
    },
    {
      id: 3,
      img: "https://swiperjs.com/demos/images/nature-3.jpg",
      country: "Dahab",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, repellat impedit? Labore consectetur asperiores ea odio quo aperiam porro quae? Aliquid impedit velit obcaecati, ullam est perferendis rem corrupti eius!",
    },
    {
      id: 4,
      img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/10/48/07/d5.jpg",
      country: "hurghada",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, repellat impedit? Labore consectetur asperiores ea odio quo aperiam porro quae? Aliquid impedit velit obcaecati, ullam est perferendis rem corrupti eius!",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        modules={[EffectFade, Navigation, Pagination]}
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
                    <h2 className="carousel-header ">
                      Winter Destinations in Egypt
                    </h2>
                    <hr />
                    {/* end of the header  */}
                    {/* //////////////// */}
                    {/* the container of the buttons and description */}
                    <div className="d-flex justify-content-between mt-5">
                      <div className="carousel-texts">
                        <h3>{el.country}</h3>
                        <p>{el.desc}</p>
                        <button className="explore">
                          Explore
                          <div className="arrow-wrapper">
                            <div className="arrow"></div>
                          </div>
                        </button>
                      </div>
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
