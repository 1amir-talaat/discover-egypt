// import React from 'react'
import { useWillingToArrive } from "../../context/WillingToArriveContext";
import { useLanguage } from "../../context/LanguageContext";
function WillingToArrive() {
  const { willingToArrive } = useWillingToArrive();
  const { language } = useLanguage();
  console.log(willingToArrive);
  return (
    <>
      <div className="d-flex align-items-center gap-3 container">
        {willingToArrive[language].map((item) => {
          return (
            <>
              <div className="col-3" style={{ width: 300 + "px" }}>
                <div className="card experience-card border-0 shadow w-100 position-relative mb-5">
                  <img
                    className="card-img-top experience-card-image"
                    src={item.Place.image}
                    alt={item.description}
                  />
                  <div className="card-body">
                    <div className="experience-card-badge">
                      <h5>{item.country}</h5>
                    </div>
                    <h4>{item.description}</h4>
                    <p style={{ color: "gray", fontSize: 20 }}>
                      {language === "en"
                        ? `Price Start From ${item.price} $`
                        : `السعر يبدأ من ${item.price * 4} جنيه`}
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
            </>
          );
        })}
      </div>
    </>
  );
}

export default WillingToArrive;
