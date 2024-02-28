import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./Register.css"
import { Link } from "react-router-dom";
function Login() {
  const { language } = useLanguage();
  return (
    <>
      {/* the container of the page */}
      <div className="container mt-5">
        {/* register container */}
        <div className="register-container p-5 pt-3 pb-5 rounded shadow">
          <h1 className="mt-5 mb-3">{language == "en" ? "Register" : "أنشئ حساب "}</h1>
          <form className="mb-5">
            <div className="row mt-2">
              <div className="form-group col-sm-6 col-md-6 col-lg-6">
                <label className="mt-4 mb-2" htmlFor="inputEmail4">
                  {language == "en" ? "First Name" : "الاسم الأول"}
                </label>
                <input type="email" className="form-control" id="inputEmail4" placeholder={language == "en" ? "Enter first name" : "أدخل الاسم الأول"} />
              </div>
            </div>
            <div className="row mt-2">
              <div className="form-group col-sm-6 col-md-6 col-lg-6">
                <label className="mt-4 mb-2" htmlFor="inputEmail4">
                  {language == "en" ? "Last Name" : " اسم العائلة"}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder={language == "en" ? "Enter last name" : "أدخل اسم العائلة  "}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="form-group col-sm-6 col-md-6 col-lg-6">
                <label className="mt-4 mb-2" htmlFor="inputEmail4">
                  {language == "en" ? "Email" : "البريد الإلكتروني"}
                </label>
                <input type="email" className="form-control" id="inputEmail4" placeholder={language == "en" ? "Enter your email" : " أدخل بريدك الإلكتروني"} />
              </div>
            </div>
            <div className="row mt-2">
              <div className="form-group col-sm-6 col-md-6 col-lg-6">
                <label className="mt-4 mb-2" htmlFor="inputEmail4">
                  {language == "en" ? "Password" : "كلمة المرور"}
                </label>
                <input type="email" className="form-control" id="inputEmail4" placeholder={language == "en" ? "Enter password" : "أدخل كلمة مرور"} />
              </div>
            </div>
            <div className="row mt-2">
              <div className="form-group col-sm-6 col-md-6 col-lg-6">
                <label className="mt-4 mb-2" htmlFor="inputEmail4">
                  {language == "en" ? "Confirm Password" : "تأكيد كلمة المرور"}
                </label>
                <input type="email" className="form-control" id="inputEmail4" placeholder={language == "en" ? "Confirm password" : "أدخل تأكيد كلمة المرور"} />
              </div>
            </div>
            <button type="submit" className="btn  text-light mt-5 register-button col-2 ">
              {language == "en" ? "Register" : "إنشاء حساب"}
            </button>
          </form>
          <div className="row -via">
            <p className="">{language == "en" ? "You can also register via" : "يمكنك أيضاً إنشاء حساب عن طريق"}</p>
            <div className="col-5 col-sm-4 col-md-2 mt-2">
              <a href="#">
                <div className="register-icon-div " style={{ backgroundColor: "#DB4437", color: "white" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="col-5 col-sm-4 col-md-2 mt-2">
              <a href="#">
                <div className="register-icon-div " style={{ backgroundColor: "#316FF6", color: "white" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="col-5 col-sm-4 col-md-2 mt-2">
              <a href="#">
                <div className="register-icon-div " style={{ backgroundColor: "black", color: "white" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-apple" viewBox="0 0 16 16">
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                  </svg>
                </div>
              </a>
            </div>
            <p className="mt-5">
              {language == "en" ? "Already have an account?" : "لديك بالفعل حساب؟"} <Link className="text-primary" to="/login">{language == "en" ? "Login" : "قم بتسجيل الدخول"}</Link>
            </p>
          </div>
        </div>
        {/* end of register container */}
      </div>
      {/* end of the container of the page */}
    </>
  );
}
export default Login;