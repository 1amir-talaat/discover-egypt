import { useState, useEffect } from "react";
import "./City.css";
import { useLanguage } from "../../context/LanguageContext";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { useAuth } from "../../context/AuthContext";
function City() {
  const { language } = useLanguage();
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await axios.get(`import.meta.env.VITE_HOSTpalces/${id}`);
        setPlace(response.data[language]);
      } catch (error) {
        console.error("Error fetching place:", error);
      }
    };
    dataFetch();
  }, [id]);
  //   console.log(place);

  //   const [comments, setComments] = useState([]);
  //   const [newComment, setNewComment] = useState("");
  //   const { user } = useAuth();
  //   console.log(user)
  //   const handleCommentChange = (e) => {
  //     setNewComment(e.target.value);
  //   };
  //   const handleAddComment = () => {
  //     if (newComment.trim() !== "") {
  //       const updatedComments = [...comments, newComment];
  //       setComments(updatedComments);
  //       setNewComment("");
  //     }
  //   };
  //   const handleDeleteComment = (index) => {
  //     const updatedComments = [...comments];
  //     updatedComments.splice(index, 1);
  //     setComments(updatedComments);
  //   };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200 && window.scrollY < 660) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {place && (
        <div className="container">
          <div className="header-info">
            <h1 className="my-3 ">
              {language === "en" ? "Explore" : "اكتشف"} {place[0].city}
            </h1>
            <a href={place[0].location_url} target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              {place[0].place_name}
            </a>
            <span className="mx-5">Located in:{place[0].city}</span>
          </div>
          <div className="d-flex mt-3 justify-content-between ">
            <div className="image-container-city">
              <img src={place[0].image} alt="" />
            </div>
            <div
              className={`mx-auto sticky-card-container ${isSticky ? "position-fixed" : ""}`}
              style={{
                top: "80px",
                [language === "en" ? "right" : "left"]: language === "en" ? "180px" : "180px",
                width: "20rem",
              }} // Adjust right property
            >
              <div className="card" style={{ width: "100%" }}>
                <div className="card-body">
                  <h5 className="card-text">{language == "en" ? "Starts From" : "تبدأ من"}</h5>
                  <p className="card-title card-price">
                    {place[0].min_price} EGP - {place[0].max_price} EGP
                  </p>
                  <hr className="m-0 mb-1 m-auto experience-card-hr position-static" />
                </div>
                <a href="" className="btn" style={{ color: "#087e8c" }}>
                  <h5>{language === "en" ? "Location" : "الموقع"}</h5>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-3 overview-city">
            <h3>{language === "en" ? "overview" : "ملخص"}</h3>
            <p>{place[0].desc}</p>
          </div>
          {/* <div className="my-4 overview-city">
          <h3>{language === "en" ? "Add Comment" : "اضف تعليق"}</h3>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={newComment}
              onChange={handleCommentChange}
              placeholder={
                language === "en" ? "Add your comment here" : "اضف تعليقك هنا"
              }
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleAddComment}
              >
                {language === "en" ? "Add" : "اضافة"}
              </button>
            </div>
          </div>
        </div>
        <div className="comments-section">
          <h3>{language === "en" ? "Comments" : "التعليقات"}</h3>
          <ul className="list-group">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
              >
                <span>{comment}</span>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDeleteComment(index)}
                >
                  {language === "en" ? "Delete" : "حذف"}
                </button>
              </li>
            ))}
          </ul>
        </div> */}
        </div>
      )}
    </>
  );
}

export default City;
