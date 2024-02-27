import React, { useState, useEffect } from "react";
import "./City.css";
import { useLanguage } from "../../context/LanguageContext";

function City() {
    const { language } = useLanguage();
    const [comment, setComment] = useState(""); // State to manage comment input
    const [commentsList, setCommentsList] = useState(
        () => JSON.parse(localStorage.getItem("comments")) || []
    ); // State to store submitted comments

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
            title: "",
            details: "",
        },
    ];

    return (
        <>
            <div className="container">
                <div
                    class={
                        language == "ar" ? "det-container" : "det-container-en"
                    }
                >
                    <h2 class="title">{language == "ar" ? "يبدا" : "start"}</h2>
                    <p class="content">
                        {language == "ar" ? "100 جنيه" : "100 pound"}
                    </p>
                    <a
                        className="btn btn-success"
                        target="_blank"
                        href="https://www.google.com"
                    >
                        {language == "ar" ? "الذهاب للموقع" : "Go to location"}
                    </a>
                </div>
                <div className={language == "ar" ? "help" : "help-en"}>
                    <h2>{language == "ar" ? "تحتاج لمساعده؟" : "Need help"}</h2>
                    <button className="btn btn-outline-success ">
                        {language == "ar"
                            ? " تواصل عبر واتساب"
                            : "communicate with whats app "}
                    </button>
                </div>
                <h1>{data[0].title}</h1>
                <div
                    className={
                        language === "ar"
                            ? "grid-container-ar"
                            : "grid-container-en"
                    }
                >
                    <div className="grid-item1">
                        <img
                            src={data[0].mainimage}
                            alt=""
                            className="grid-img"
                        />
                    </div>
                </div>
                <h3> {language === "ar" ? "نظرة عامة" : "Overview"} </h3>
                <p>{data.details}</p>
                <form onSubmit={handleSubmit} className="form">
                    <input
                        type="text"
                        className="form-control d-inline"
                        placeholder={
                            language === "ar" ? "تعليق..." : "Comment..."
                        }
                        value={comment}
                        onChange={handleCommentChange}
                    />
                    <input
                        type="submit"
                        className="btn btn-success d-inline "
                        value={language === "en" ? "Submit" : "نشر التعليق"}
                    />
                </form>
                <div>
                    <h4>{language === "ar" ? "التعليقات:" : "Comments:"}</h4>
                    <ul>
                        {commentsList.map((comment, index) => (
                            <li key={index}>{comment}</li>
                        ))}
                    </ul>
                    <button onClick={handleClearComments}>
                        {language === "ar" ? "مسح التعليقات" : "Clear Comments"}
                    </button>
                </div>
                <div className="container-fluid"></div>
            </div>
        </>
    );
}

export default City;
