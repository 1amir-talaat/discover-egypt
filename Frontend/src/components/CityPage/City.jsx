import React, { useState, useEffect } from "react";
import "./City.css";
import { useLanguage } from "../../context/LanguageContext";

function City() {
  const { language } = useLanguage();
  const [comment, setComment] = useState(""); // State to manage comment input
  const [commentsList, setCommentsList] = useState(() => JSON.parse(localStorage.getItem("comments")) || []); // State to store submitted comments

  useEffect(() => {
    // Save commentsList to local storage whenever it changes
    localStorage.setItem("comments", JSON.stringify(commentsList));
  }, [commentsList]);

  const handleCommentChange = (event) => {
    setComment(event.target.value); // Update comment state on input change
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a copy of the comments list and add the new comment
    const updatedCommentsList = [...commentsList, comment];
    setCommentsList(updatedCommentsList);
    // Optionally, you can clear the input field after submission
    setComment("");
  };

  const handleClearComments = () => {
    setCommentsList([]);
    localStorage.removeItem("comments");
  };

  const data = [
    {
      mainimage: "",
      secimage: "",
      thirdimg: "",
      forthimg: "",
      fifthimg: "",
      title: "asdasdasdasdasd",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo reiciendis assumenda sequi illum accusamus quibusdam consectetur dolor provident labore iure, atque mollitia ipsam est dignissimos quod velit suscipit similique.",
    },
  ];

  return (
    <>
      <div className="container">
        <h1>{data.title}</h1>
        <div className={language === "ar" ? "grid-container-ar" : "grid-container-en"}>
          <div className="grid-item1 place-card">
            <img src={data[0].mainimage} alt="" className="grid-img" />
          </div>
          <div className="grid-item2 place-card">
            <img src={data[0].secimage} alt="" className="grid-img" />
          </div>
          <div className="grid-item3 place-card">
            <img src={data[0].thirdimg} alt="" className="grid-img" />
          </div>
          <div className="grid-item4 place-card">
            <img src={data[0].forthimgimg} alt="" className="grid-img" />
          </div>
          <div className="grid-item5 place-card">
            <img src={data[0].fifthimg} alt="" className="grid-img" />
          </div>
        </div>
        <h3> {language === "ar" ? "نظرة عامة" : "Overview"} </h3>
        <p>{data.details}</p>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            className="form-control d-inline"
            placeholder={language === "ar" ? "تعليق..." : "Comment..."}
            value={comment}
            onChange={handleCommentChange}
          />
          <input type="submit" className="btn btn-success d-inline " value={language === "en" ? "Submit" : "نشر التعليق"} />
        </form>
        <div>
          <h4>{language === "ar" ? "التعليقات:" : "Comments:"}</h4>
          <ul>
            {commentsList.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
          <button onClick={handleClearComments}>{language === "ar" ? "مسح التعليقات" : "Clear Comments"}</button>
        </div>
        <div className="container-fluid"></div>
      </div>
    </>
  );
}

export default City;
