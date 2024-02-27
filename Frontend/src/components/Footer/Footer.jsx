import logo from "./logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { CiCircleChevUp } from "react-icons/ci";
import "./Footer.css";
import img from "./footer.png";
import { useLanguage } from "../../context/LanguageContext";

function Footer() {
    const { language } = useLanguage();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <>
            <footer>
                <img src={img} style={{ width: "100%" }} alt="" />
                <div className="container"></div>
                <div className="container-fuid second-foot text-white">
                    <div className="container">
                        <div className="row row-con">
                            <div className="row">
                                <div className="col-3 logo-col">
                                    <img src={logo} className="logo" />
                                </div>
                                <div className="col-3">
                                    <hr className="footer-sub-line" />
                                    <h2>
                                        {language == "ar"
                                            ? "الموسم والأحداث"
                                            : "season & Events"}
                                    </h2>
                                    <ul>
                                        <li>
                                            <a
                                                href="#"
                                                className={
                                                    language == "en"
                                                        ? "a-en"
                                                        : "a-ar"
                                                }
                                            >
                                                {language == "en"
                                                    ? "Pyramids Festival of Light"
                                                    : "عرض الاهرامات للضوء"}
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className={
                                                    language == "en"
                                                        ? "a-en"
                                                        : "a-ar"
                                                }
                                            >
                                                {language == "en"
                                                    ? "Abu Simbel Sun Festival"
                                                    : "شمس أبو سمبل"}
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="#"
                                                className={
                                                    language == "en"
                                                        ? "a-en"
                                                        : "a-ar"
                                                }
                                            >
                                                {language == "en"
                                                    ? "El Gouna Film Festival"
                                                    : "مهرجان الجونه للافلام"}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <hr className="footer-sub-line" />
                                    <h2>
                                        {language == "en"
                                            ? "Discover Egypt"
                                            : "اكتشف مصر"}
                                    </h2>
                                    <ul>
                                        <li>
                                            <a
                                                href="#"
                                                className={
                                                    language == "en"
                                                        ? "a-en"
                                                        : "a-ar"
                                                }
                                            >
                                                {language == "en"
                                                    ? "nature"
                                                    : "الطبيعه"}
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className={
                                                    language == "en"
                                                        ? "a-en"
                                                        : "a-ar"
                                                }
                                            >
                                                {language == "en"
                                                    ? "lakes"
                                                    : "البحيرات"}
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className={
                                                    language == "en"
                                                        ? "a-en"
                                                        : "a-ar"
                                                }
                                            >
                                                {language == "en"
                                                    ? "The nile"
                                                    : "نهر النيل"}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <hr className="footer-sub-line" />
                                    <h2>
                                        {language == "en"
                                            ? "Useful informations"
                                            : "معلومات مهمه"}
                                    </h2>
                                    <ul>
                                        <li>
                                            <a
                                                href="#"
                                                className={
                                                    language == "en"
                                                        ? "a-en"
                                                        : "a-ar"
                                                }
                                            >
                                                {language == "en"
                                                    ? "About Rgypt"
                                                    : "مصر"}
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className={
                                                    language == "en"
                                                        ? "a-en"
                                                        : "a-ar"
                                                }
                                            >
                                                {language == "en"
                                                    ? "important numbers"
                                                    : "ارقام مهمه"}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col contact-y">
                                <div className="contact-bdy d-flex">
                                    <h3>
                                        {language == "en"
                                            ? "Contact with us:"
                                            : "تواصل معنا : "}
                                    </h3>
                                    <FaFacebookF className="i-cons" />
                                    <FaInstagram className="i-cons" />
                                    <FaXTwitter className="i-cons" />
                                    <FaYoutube className="i-cons" />
                                </div>
                                <button class="button" onClick={scrollToTop}>
                                    <svg class="svgIcon" viewBox="0 0 384 512">
                                        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
