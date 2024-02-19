import logo from "./logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { CiCircleChevUp } from "react-icons/ci";
import "./Footer.css";
import img from "./footer.png";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { language } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <footer>
        <img src={img} style={{ width: "100%"}} alt="" />
        <div className="container">
          <div className="row">
            <div className="col-3 logo-col">
              <img src={logo} className="logo" />
            </div>
            <div className="col-3">
              <hr className="footer-sub-line" />
              <h2>{language == "ar" ? "الموسم والأحداث" : "season & Events"}</h2>
              <ul>
                <li>
                  <a href="#" className={language == "en" ? "a-en" : "a-ar"}>
                    {language == "en" ? "Pyramids Festival of Light" : "عرض الاهرامات للضوء"}
                  </a>
                </li>
                <li>
                  <a href="#" className={language == "en" ? "a-en" : "a-ar"}>
                    {language == "en" ? "Abu Simbel Sun Festival" : "شمس أبو سمبل"}
                  </a>
                </li>
                <li>
                  <a href="#" className={language == "en" ? "a-en" : "a-ar"}>
                    {language == "en" ? "Alexandria International Film Festival" : "مهرجان الإسكندرية السينمائي الدولي"}
                  </a>
                </li>
                <li>
                  <a href="#" className={language == "en" ? "a-en" : "a-ar"}>
                    {language == "en" ? "El Gouna Film Festival" : "مهرجان الجونه للافلام"}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <hr className="footer-sub-line" />
              <h2>{language == "en" ? "Discover Egypt" : "اكتشف مصر"}</h2>
              <ul>
                <li>
                  <a href="#" className={language == "en" ? "a-en" : "a-ar"}>
                    {language == "en" ? "nature" : "الطبيعه"}
                  </a>
                </li>
                <li>
                  <a href="#" className={language == "en" ? "a-en" : "a-ar"}>
                    {language == "en" ? "lakes" : "البحيرات"}
                  </a>
                </li>
                <li>
                  <a href="#" className={language == "en" ? "a-en" : "a-ar"}>
                    {language == "en" ? "The nile" : "نهر النيل"}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <hr className="footer-sub-line" />
              <h2>{language == "en" ? "Useful informations" : "معلومات مهمه"}</h2>
              <ul>
                <li>
                  <a href="#" className={language == "en" ? "a-en" : "a-ar"}>
                    {language == "en" ? "About Rgypt" : "مصر"}
                  </a>
                </li>
                <li>
                  <a href="#" className={language == "en" ? "a-en" : "a-ar"}>
                    {language == "en" ? "important numbers" : "ارقام مهمه"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fuid second-foot">
          <div className="container">
            <div className="row row-con">
              <div className="col">
                <h2> {language == "en" ? "powerd by" : "انشيء بواسطه"} </h2>
                <p className="d-inline team">{language == "en" ? "Elrahala team" : "الرحاله"}</p>
              </div>
              <div className="col">
                <h2>{language == "en" ? "Call Center" : "مركز المكالمات"}</h2>
                <div className="numbers">
                  <a style={{ fontSize: 20 }} href="tel:+01066272505">
                    {language == "en" ? "sameh muhammad" : "سامح محمد"}
                  </a>
                  <a style={{ fontSize: 20 }} href="tel:+01141606848">
                    {language == "en" ? "amir talaat" : "امير طلعت"}
                  </a>
                  <a style={{ fontSize: 20 }} href="tel:+01021105085">
                    {" "}
                    {language == "en" ? "saif ahmed" : "سيف احمد"}{" "}
                  </a>
                  <a style={{ fontSize: 20 }} href="tel:+01121859584">
                    {language == "en" ? "zeyad hymen" : "زياد هيمن"}
                  </a>
                  <a style={{ fontSize: 20 }} href="tel:+">
                    {language == "en" ? "basmala magdy" : "بسملة مجدي"}
                  </a>
                </div>
              </div>
              <div className="col">
                <h2 style={{ fontSize: 25 }}>{language == "en" ? "Subsecribe for notifications" : "اشترك لوصول الاشعارات"}</h2>
                <form className="form e-form" method="post">
                  <input type="text" className="e-input" name="Email" />
                  <input className="e-submit btn" type="submit" value={language == "en" ? "join" : "تاكيد"} />
                </form>
              </div>
              <div className="col">
                <h2>{language == "en" ? "Feedback" : "الانطباع"}</h2>
                <form className="form e-form" method="post">
                  <input type="email" name="Feedback" className="e-input" />
                  <input className="e-submit btn" type="submit" value={language == "en" ? "Add Feedback" : "نشر التعليق"} />
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col contact-y">
                <div className="contact-bdy d-flex">
                  <h3>{language == "en" ? "Contact with us:" : "تواصل معنا : "}</h3>
                  <FaFacebookF className="i-cons" />
                  <FaInstagram className="i-cons" />
                  <FaXTwitter className="i-cons" />
                  <FaYoutube className="i-cons" />
                </div>
                <CiCircleChevUp onClick={scrollToTop} className="scroll-to-up" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
