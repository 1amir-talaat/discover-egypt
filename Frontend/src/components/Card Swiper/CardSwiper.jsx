import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "../../context/LanguageContext";
import "./CardSwiper.css";

import { useWillingToArrive } from "../../context/WillingToArriveContext";
import { useAuth } from "../../context/AuthContext";

import { FaRegHeart, FaHeart } from "react-icons/fa";

function CardSwiper({ data }) {
  const { language } = useLanguage();
  const langDirection = language === "en" ? "ltr" : "rtl"; // Corrected the comparison operator
  const { willingToArrive, addToWillingToArrive, removeFromWillingToArrive } = useWillingToArrive();
  const { user } = useAuth();

  return (
    <Swiper
      spaceBetween={15}
      breakpoints={{
        0: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 1.5,
        },
        992: {
          slidesPerView: 2.5,
        },
        1400: {
          slidesPerView: 3.5,
        },
      }}
      dir={langDirection}
      key={langDirection}
      className="ms-3 mt-3"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="card cardy border-0 shadow w-100 position-relative mb-5">
            {user && (
              <div className="add-to-wishlist">
                {willingToArrive.some((i) => i.id === item.id) ? (
                  <FaHeart onClick={() => removeFromWillingToArrive(item.id)} />
                ) : (
                  <FaRegHeart onClick={() => addToWillingToArrive(item.id)} />
                )}
              </div>
            )}
            <img className="card-img-top cardy-image" src={item.image} alt={item.description} />
            <div className="card-body">
              <p style={{ color: "gray", fontSize: 20 }}>
                {item.min_price === "مجاناً" || item.min_price === "Free" ? item.min_price : language === "en" ? `$${item.min_price}` : `${item.min_price * 15} جنيه`}
              </p>
              <h2>{item.title}</h2>
              <h5>{item.desc}</h5>
            </div>
            <hr />
            <button className="btn fw-bold" style={{ color: "rgb(83, 187, 123)" }}>
              <h5>
                <a href={`/place-details/${item.id}`}>{language === "en" ? "Learn More" : "أكتشف أكثر"}</a>
              </h5>
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardSwiper;
