import "./City.css";
import { useLanguage } from "../../context/LanguageContext";

function City() {
  const { language } = useLanguage();
  const dummy_data =
    language == "en"
      ? {
          city: "Dahab",
          place_name: "abo_galoom",
          location_url: "www.google.com",
          image:
            "https://images.pexels.com/photos/18887144/pexels-photo-18887144/free-photo-of-tropical-resort-on-a-desert-in-egypt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          min_price: "2000",
          desc: "        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, est voluptatum nisi quidem eius id consectetur dolor. Placeat possimus, quidem, veniam quam quasi totam ipsam, reiciendis blanditiis dicta adipisci molestiae.</h1>          ",
        }
      : {
          city: "دهب",
          place_name: "ابو جالوم",
          location_url: "www.google.com",
          image:
            "https://images.pexels.com/photos/18887144/pexels-photo-18887144/free-photo-of-tropical-resort-on-a-desert-in-egypt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          min_price: "2000",
          desc: "        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, est voluptatum nisi quidem eius id consectetur dolor. Placeat possimus, quidem, veniam quam quasi totam ipsam, reiciendis blanditiis dicta adipisci molestiae.</h1>          ",
        };
  return (
    <>
      <div className="container">
        {/* the header  */}
        <div className="header-info">
          <h1 className="my-3 ">
            {language == "en" ? "Explore" : "اكتشف"} {dummy_data.place_name}
          </h1>
          <a href={dummy_data.location_url} target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            {dummy_data.place_name}
          </a>
          <span className="mx-5">Located in:{dummy_data.city}</span>
        </div>
        {/* end header  */}
        {/* image and price  */}
        <div className="d-flex mt-3 justify-content-between">
          <div className="image-container-city ">
            <img src={dummy_data.image} alt="" />
          </div>
          {/* /////////////////// */}
          <div className="mx-auto sticky-card-container">
            <div className="card sticky-top" style={{ width: 100 + "%" }}>
              <div className="card-body">
                <h5 className="card-text ">Starts From</h5>
                <p className="card-title card-price">
                  {dummy_data.min_price} EGP
                </p>
                <hr className="m-0 mb-1 m-auto experience-card-hr position-static" />
              </div>
              <a href="" className="btn " style={{ color: "#087e8c" }}>
                <h5>{language === "en" ? "sold out" : "منتهية"}</h5>
              </a>
            </div>
          </div>
        </div>
        {/* end image and price  */}
        <div className="mt-3 overview-city">
          <h3>{language == "en" ? "overview" : "ملخص"}</h3>
          <p>{dummy_data.desc}</p>
        </div>
      </div>
    </>
  );
}

export default City;
