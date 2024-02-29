import { useLanguage } from "../../context/LanguageContext";
import "./Crad.css";

import { useWillingToArrive } from "../../context/WillingToArriveContext";
import { useAuth } from "../../context/AuthContext";

import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

function Card({ data }) {
  const { language } = useLanguage();
  const { willingToArrive, addToWillingToArrive, removeFromWillingToArrive } = useWillingToArrive();
  const { user } = useAuth();

  return (
    <>
      {data.map((item) => {
        return (
          <>
            <div className="col-lg-4 col-md-6 col-sm-8 mt-3 ">
              <div className="card text-start cardy border-0 shadow ">
                {user && (
                  <div className="add-to-wishlist">
                    {willingToArrive.some((i) => i.placeId === item.id) ? (
                      <FaHeart onClick={() => removeFromWillingToArrive(item.id)} />
                    ) : (
                      <FaRegHeart onClick={() => addToWillingToArrive(item.id)} />
                    )}
                  </div>
                )}
                <img className="card-img-top h-100 w-100" src={item.image} alt="Title" />
                <div className="card-body">
                  <h3 className={`card-title ${language === "ar" ? "text-end" : ""}`}>{item.title}</h3>
                  <p className={`card-text ${language === "ar" ? "text-end" : ""}`} style={{ fontSize: 17, color: "#333333" }}>
                    {item.desc}
                  </p>
                </div>
                <hr className="beach-card-hr " />
                <button className="btn fw-bold" style={{ color: "rgb(83, 187, 123)" }}>
                  <h5>
                    <a href={`/place-details/${item.id}`}>{language === "en" ? "Learn More" : "أكتشف أكثر"}</a>
                  </h5>
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Card;
