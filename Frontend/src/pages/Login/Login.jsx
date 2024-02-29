import React, { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./Login.css";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);

  // Validate email
  const validateEmail = () => {
    const emailError = !email.trim()
      ? language === "en"
        ? "Email is required"
        : "البريد الإلكتروني مطلوب"
      : !/\S+@\S+\.\S+/.test(email)
      ? language === "en"
        ? "Invalid email address"
        : "عنوان البريد الإلكتروني غير صحيح"
      : "";
    setErrors((prevErrors) => ({ ...prevErrors, email: emailError }));
  };

  // Validate password
  const validatePassword = () => {
    const passwordError = !password.trim()
      ? language === "en"
        ? "Password is required"
        : "كلمة المرور مطلوبة"
      : password.length <= 8
      ? language === "en"
        ? "Password must be at least 8 characters long"
        : "يجب أن تكون كلمة المرور على الأقل 8 أحرف"
      : "";
    setErrors((prevErrors) => ({ ...prevErrors, password: passwordError }));
  };

  // Effect to validate email and password on state change
  useEffect(() => {
    // Clear existing timeout if exists
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    // Set timeout to validate after a delay
    const timeout = setTimeout(() => {
      validateEmail();
      validatePassword();
    }, 500); // Adjust delay here as needed

    // Set the typing timeout
    setTypingTimeout(timeout);

    // Clean up function to clear timeout
    return () => clearTimeout(timeout);
  }, [email, password]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoginFailed(false);
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      setLoginFailed(true);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="login-container p-5 pt-3 pb-5 rounded shadow">
          <h1 className="mt-5 mb-3">{language === "en" ? "Log in" : " تسجيل الدخول"}</h1>
          {loginFailed && (
            <div className="alert alert-danger" role="alert">
              {language === "en"
                ? "Login failed. Please check your email and password."
                : "فشل تسجيل الدخول. يرجى التحقق من بريدك الإلكتروني وكلمة المرور."}
            </div>
          )}
          <form className="mb-5" onSubmit={handleSubmit}>
            <div className="row mt-2">
              <div className="form-group col-sm-6 col-md-6 col-lg-6">
                <label className="mt-4 mb-2" htmlFor="inputEmail4">
                  {language === "en" ? "Email" : " البريد الإلكتروني"}
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email && "is-invalid"}`}
                  id="inputEmail4"
                  placeholder={language === "en" ? "Enter your email" : "أدخل بريدك الإلكتروني"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
            </div>
            <div className="row mt-2">
              <div className="form-group col-sm-6 col-md-6 col-lg-6">
                <label className="mt-4 mb-2" htmlFor="inputPassword">
                  {language === "en" ? "Password" : "كلمة المرور "}
                </label>
                <input
                  type="password"
                  className={`form-control ${errors.password && "is-invalid"}`}
                  id="inputPassword"
                  placeholder={language === "en" ? "Enter your password" : "أدخل كلمة المرور الخاصة بك"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>
            </div>

            <button type="submit" className={`btn text-light mt-5 login-button col-2`}>
              {loading ? "Loading..." : language === "en" ? "Log in" : "تسجيل الدخول"}
            </button>
          </form>
          <div className="row login-via">
            <p className="">{language == "en" ? "You can also log in via" : "يمكنك أيضاً تسجيل الدخول عن طريق"}</p>
            <div className="col-5 col-sm-4 col-md-2 mt-2">
              <a href="/coming-soon">
                <div className="login-icon-div " style={{ backgroundColor: "#DB4437", color: "white" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="col-5 col-sm-4 col-md-2 mt-2">
              <a href="/coming-soon">
                <div className="login-icon-div " style={{ backgroundColor: "#316FF6", color: "white" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="col-5 col-sm-4 col-md-2 mt-2">
              <a href="/coming-soon">
                <div className="login-icon-div " style={{ backgroundColor: "black", color: "white" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                  </svg>
                </div>
              </a>
            </div>
            <p className="mt-5">
              {language == "en" ? "Don't have an account?" : "ليس لديك حساب؟"}{" "}
              <Link className="text-primary" to="/register">
                {language == "en" ? "Register" : "قم بالتسجيل"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
