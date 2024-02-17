import React from "react";
import logo from "./logo.png";
import full from "./ful-logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import "./footer.css";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
    const { language } = useLanguage();
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-3 logo-col">
                            <img src={logo} className="logo" />
                        </div>
                        <div className="col-3">
                            <hr className="footer-sub-line" />
                            <h2>season & Events</h2>
                            <ul>
                                <li>
                                    <a href="">
                                        {language == "en"
                                            ? "Pyramids Festival of Light"
                                            : "عرض الاهرامات للضوء"}
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        {language == "en"
                                            ? "Abu Simbel Sun Festival"
                                            : "شمس أبو سمبل"}
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        {language == "en"
                                            ? "Alexandria International Film Festival"
                                            : "مهرجان الإسكندرية السينمائي الدولي"}
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        {language == "en"
                                            ? "El Gouna Film Festival"
                                            : "مهرجان الجونه للافلام"}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <hr className="footer-sub-line" />
                            <h2>Discover Egypt</h2>
                            <ul>
                                <li>
                                    <a href="">
                                        {language == "en"
                                            ? "nature"
                                            : "الطبيعه"}
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        {language == "en"
                                            ? "lakes"
                                            : "البحيرات"}
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        {language == "en"
                                            ? "The nile"
                                            : "نهر النيل"}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <hr className="footer-sub-line" />
                            <h2>Useful informations</h2>
                            <ul>
                                <li>
                                    <a href="">
                                        {language == "en"
                                            ? "About Rgypt"
                                            : "مصر"}
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        {language == "en"
                                            ? "important numbers"
                                            : "ارقام مهمه"}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fuid second-foot">
                    <div className="container second-foot">
                        <div className="row">
                            <div className="col">
                                <h2>powerd by</h2>
                                <p className="d-inline team">
                                    {language == "en"
                                        ? "Elrahala team"
                                        : "الرحاله"}
                                </p>
                                <img src={full} className="full-logo" />
                            </div>
                            <div className="col">
                                <h2>Call Center</h2>
                            </div>
                            <div className="col">
                                <h2>Subsecribe for notifications</h2>
                                <form className="form e-form" method="post">
                                    <input
                                        type="text"
                                        className="e-input"
                                        name="Email"
                                    />
                                    <input
                                        className="e-submit btn"
                                        type="submit"
                                        value="join"
                                    />
                                </form>
                            </div>
                            <div className="col">
                                <h2>FeedBack</h2>
                                <form className="form e-form" method="post">
                                    <input
                                        type="text"
                                        name="Feedback"
                                        className="e-input"
                                    />
                                    <input
                                        className="e-submit btn"
                                        type="submit"
                                        value="Add feedback"
                                    />
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <a href="" className="p-link" > {language=="en"?"Privacy policy":"سياسات الخصوصيه"}</a>
                                <a href="" className="p-link" > {language=="en"?"Cookies":"ملفات تعريف الارتباط"} </a>
                            </div>
                            <div className="col contact-y">
                                <div className="contact-bdy d-flex">
                                    <h3>Contact with us:</h3>
                                    <FaFacebookF className="i-cons" />
                                    <FaInstagram className="i-cons" />
                                    <FaXTwitter className="i-cons" />
                                    <FaYoutube className="i-cons" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
