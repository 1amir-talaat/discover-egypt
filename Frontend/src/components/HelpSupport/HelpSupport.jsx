import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./HelpSupport.css";
function HelpSupport() {
    const { language } = useLanguage();
    return (
        <>
            {/* Hero's image and title  */}
            <div className="image-container">
                <img src="https://img.freepik.com/free-photo/confident-call-center-operator-talking-with-client_74855-4059.jpg?size=626&ext=jpg&ga=GA1.1.921307657.1671265933&semt=sph" style={{ objectFit: 'cover' }} alt="" />
                <h1 className={language == "en" ? "image-text-en" : "image-text-ar"}>
                    {language == "en" ? "Help & Support" : "المساعدة والدعم"}
                </h1>
            </div>
            {/* the container of the page */}
            <div className="container mt-5">
                {/* contact us container */}
                <div className="contactus-container mt-5" id="contact-us">
                    <h1 className="mt-5 mb-3">{language == "en" ? "Contact Us" : "تواصل معنا"}</h1>
                    <span className="text-secondary">{language == "en" ? "Send us a message, complaint or enquiry by filling the contact form below" : "أرسل لنا رسالة أو شكوى أو استفسار عن طريق تعبئة نموذج التواصل أدناه"}</span>
                    <form className="mb-5">
                        <div class="row">
                            <div class="form-group col-sm-6 col-md-6 col-lg-6">
                                <label className="mt-4 mb-2" for="inputEmail4">{language == "en" ? "First Name" : "الاسم الأول"}</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder={language == "en" ? "Enter First Name" : "أدخل الاسم الأول"} />
                            </div>
                            <div class="form-group col-sm-6 col-md-6 col-lg-6">
                                <label className="mt-4 mb-2" for="inputPassword4">{language == "en" ? "Last Name" : "اسم العائلة"}</label>
                                <input type="password" class="form-control" id="inputPassword4" placeholder={language == "en" ? "Enter Last Name" : "أدخل اسم العائلة"} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6 col-md-6 col-lg-6">
                                <label className="mt-4 mb-2" for="inputEmail4">{language == "en" ? "Email Address" : "عنوان البريد اللإلكتروني"}</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder={language == "en" ? "Enter Email Address" : "أدخل عنوان البريد الإلكتروني"} />
                            </div>
                            <div class="form-group col-12 col-sm-6 col-md-6 col-lg-6">
                                <label className="mt-4 mb-2" for="inputState">{language == "en" ? "Phone Number" : "رقم الهاتف"}</label>
                                <div className="row">
                                    <div className="col-2 col-sm-4 col-md-4 col-lg-3 ">
                                        <select id="inputState" class="form-control">
                                            <option selected>+02</option>
                                            <option>+966</option>
                                            <option>+93</option>
                                            <option>+355</option>
                                            <option>+213</option>
                                        </select>
                                    </div>
                                    <div className="col-6 col-sm-8 col-md-8 col-lg-6 ">
                                        <input type="email" class="form-control" id="inputEmail4" placeholder={language == "en" ? "Enter Phone Number" : "أدخل رقم الهاتف"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-4 text-secondary" />
                        <div class="row">
                            <div class="form-group col-lg-5">
                                <label className="mt-2 mb-2" for="exampleFormControlSelect1">{language == "en" ? "Message Type" : "نوع الرسالة"}</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option selected>{language == "en" ? "Complaint" : "شكوي"}</option>
                                    <option>{language == "en" ? "Emergency" : "حالة طوارئ"}</option>
                                    <option>{language == "en" ? "Enquiry" : "استفسار"}</option>
                                    <option> {language == "en" ? "Out Of Scope" : "أخري"} </option>
                                    <option>{language == "en" ? "Suggestion" : "اقتراحات"}</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label className="mt-4 mb-2" for="exampleFormControlTextarea1">{language == "en" ? "Your Message" : "الرسالة"}</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder={language == "en" ? "Enter your message here" : "يرجي إدخال رسالتك"}></textarea>
                            </div>
                        </div>
                        <button type="submit" class="btn text-light mt-4 send-message-button" >{language == "en" ? "Send Message" : "أرسل الرسالة"}</button>
                    </form>
                </div>
                {/* end of contact us container */}
                {/* social links container */}
                <div className="sociallinks-container mt-5" id="social-links">
                    <h1 className="mt-5 mb-3">{language == "en" ? "Social & Other Channels" : "قنوات التواصل الاجتماعي"}</h1>
                    <hr className="text-secondary" />
                    <div className="row icons-row ">
                        <div className="col-5 col-sm-4 col-md-3 mt-5 text-align-center">
                            <a href="#">
                                <div style={{ backgroundColor: "#00aeff", color: "white" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                    </svg>
                                </div>
                            </a>
                            <p className="mt-3">{language == "en" ? "Phone Call" : "الهاتف"}</p>
                        </div>
                        <div className="col-5 col-sm-4 col-md-3 mt-5 text-align-center">
                            <a href="#">
                                <div style={{ backgroundColor: "#BB001B", color: "white" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                    </svg>
                                </div>
                            </a>
                            <p className="ms-2 mt-3">{language == "en" ? "Email" : "البريد الإلكتروني"}</p>
                        </div>
                        <div className="col-5 col-sm-4 col-md-3 mt-5 text-align-center">
                            <a href="#">
                                <div style={{ backgroundColor: "#316FF6", color: "white" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                    </svg>
                                </div>
                            </a>
                            <p className="mt-3">{language == "en" ? "Facebook" : "الفيسبوك"}</p>
                        </div>
                        <div className="col-5 col-sm-4 col-md-3 mt-5 text-align-center">
                            <a href="#">
                                <div style={{ backgroundColor: "black", color: "white" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                    </svg>
                                </div>
                            </a>
                            <p className="ms-4 mt-3">{language == "en" ? "X" : "إكس"}</p>
                        </div>
                        <div className="col-5 col-sm-4 col-md-3 mt-5 text-align-center">
                            <a href="#">
                                <div style={{ backgroundColor: "#E1306C", color: "white" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                    </svg>
                                </div>
                            </a>
                            <p className="mt-3">{language == "en" ? "Instagram" : "إنستجرام"}</p>
                        </div>
                        <div className="col-5 col-sm-4 col-md-3 mt-5 text-align-center">
                            <a href="#">
                                <div style={{ backgroundColor: "#25D366", color: "white" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                    </svg>
                                </div>
                            </a>
                            <p className="mt-3">{language == "en" ? "WhatsApp" : "الواتساب"}</p>
                        </div>
                    </div>
                </div>
                {/* end of social links container */}
            </div>
            {/* end of the container of the page */}
        </>
    );
}
export default HelpSupport;