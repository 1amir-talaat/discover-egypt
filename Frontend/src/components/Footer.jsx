import React from "react";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  // by basmala
  const {language}=useLanguage();
  return (
    language=="en"?
    // Footer in English
    <footer className="bg-dark text-center text-lg-start text-light ">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Footer Content</h5>
            <p>
              Example 
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-md-4 ">
            <h5 className="text-uppercase">Seasons & Events</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-light">Link 1</a>
              </li>
              <li>
                <a href="#!" className="text-light">Link 2</a>
              </li>
              <li>
                <a href="#!" className="text-light">Link 3</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-md-4">
            <h5 className="text-uppercase">Discover Egypt</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-light">See & Do</a>
              </li>
              <li>
                <a href="#!" className="text-light"> Plan Your Trip</a>
              </li>
              <li>
                <a href="#!" className="text-light">Travel Essentials</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-md-4">
            <h5 className="text-uppercase">More Information</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-light"> About Egypt</a>
              </li>
              <li>
                <a href="#!" className="text-light">Link 2</a>
              </li>
              <li>
                <a href="#!" className="text-light">Link 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-white">
        &copy; {new Date().getFullYear()} Discover Egypt
      </div>
    </footer>
    :
    // Footer in Arabic
    <footer className="bg-dark text-center text-lg-start text-light ">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Footer Content</h5>
            <p>
              Example 
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-md-4 ">
            <h5 className="text-uppercase">المواسم والأحداث</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-light">Link 1</a>
              </li>
              <li>
                <a href="#!" className="text-light">Link 2</a>
              </li>
              <li>
                <a href="#!" className="text-light">Link 3</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-md-4">
            <h5 className="text-uppercase">اكتشف مصر </h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-light"> معالم وأنشطة </a>
              </li>
              <li>
                <a href="#!" className="text-light"> خطط رحلتك  </a>
              </li>
              <li>
                <a href="#!" className="text-light"> أساسيات السفر</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-md-4">
            <h5 className="text-uppercase">معلومات أكثر </h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-light"> عن مصر </a>
              </li>
              <li>
                <a href="#!" className="text-light">Link 2</a>
              </li>
              <li>
                <a href="#!" className="text-light">Link 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-white">
        &copy; {new Date().getFullYear()} Discover Egypt
      </div>
    </footer>
  );
}

export default Footer;
