import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "../../context/LanguageContext";
import "./Crad.css"

function Card({ data }) {
    const { language } = useLanguage();
    const langDirection = language == "en" ? "ltr" : "rtl";

    return (
        <>
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
                            <img className="card-img-top cardy-image" src={item.image} alt={item.description} />
                            <div className="card-body">
                                <p style={{ color: "gray", fontSize: 20 }}>
                                    {item.price === "مجاناً" || item.price === "Free"
                                        ? item.price
                                        : language === "en"
                                            ? `$${item.price}`
                                            : `${item.price * 15} جنيه`}
                                </p>
                                <h2>{item.activity_name}</h2>
                                <h5>{item.description}</h5>
                            </div>
                            <hr />
                            <button className="btn fw-bold" style={{ color: "rgb(83, 187, 123)" }}>
                                <h5>{language === "en" ? "Book Now" : "أحجز الآن"}</h5>
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )

}

export default Card