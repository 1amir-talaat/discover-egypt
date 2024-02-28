import { useLanguage } from "../../context/LanguageContext";
import "./Crad.css"

function Card({ data }) {
    const { language } = useLanguage();

    return (
        <>
            {data.map((item) => {
                return (
                    <>
                        <div className="col-lg-4 col-md-6 col-sm-8 mt-3 ">
                            <div className="card text-start cardy border-0 shadow ">
                                <img className="card-img-top h-100 w-100" src={item.image} alt="Title" />
                                <div className="card-body">
                                    <h3 className={`card-title ${language === "ar" ? "text-end" : ""}`}>{item.place_name}</h3>
                                    <p className={`card-text ${language === "ar" ? "text-end" : ""}`} style={{ fontSize: 17, color: "#333333" }}>
                                        {item.description}
                                    </p>
                                    <hr className="beach-card-hr " />
                                    <button className="btn fw-bold" style={{ color: "rgb(83, 187, 123)" }}>
                                        <h5>{language === "en" ? "Learn More" : "أكتشف أكثر"}</h5>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    )

}

export default Card