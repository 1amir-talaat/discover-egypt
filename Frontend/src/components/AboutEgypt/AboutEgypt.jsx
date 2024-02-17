import { useEffect } from "react";
import "./AboutEgypt.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLanguage } from "../../context/LanguageContext";

function AboutEgypt() {
  //adding aos
  useEffect(() => {
    AOS.init();
  }, []);
  //handling languages
  const { language } = useLanguage();
  return (
    <div>
      {/* image and text  */}
      <div className="image-container">
        <img
          src="https://images.pexels.com/photos/18887144/pexels-photo-18887144/free-photo-of-tropical-resort-on-a-desert-in-egypt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h1 className={language == "en" ? "image-text-en" : "image-text-ar"}>
          {language == "en" ? "About Egypt" : "معلومات حول مصر"}
        </h1>
      </div>
      {/* traditions part */}
      <div className="container mt-5">
        {/* a container for animation */}
        <div
          data-aos={language == "en" ? "fade-left" : "fade-right"}
          data-aos-duration="1500"
        >
          <h1>
            {language == "en" ? "Traditions of Egypt" : "التقاليد المصرية"}
          </h1>
          {/* the content and image container  */}
          <div className="d-flex traditinos">
            <img
              src="https://images.pexels.com/photos/6782583/pexels-photo-6782583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="traditions-texts align-self-center ">
              <div className="container">
                <h4 className="text-center">
                  {" "}
                  {language == "en" ? "language" : "اللغة"}
                </h4>
                <p>
                  {language == "ar"
                    ? "تتميز الهجة المصرية بتنوعها اللغوي وثراها الثقافي، حيث تعكس تاريخًا عريقًا وتنوعًا ثقافيًا غنيًا. تتضمن اللهجة المصرية مجموعة من العبارات والتعابير الشهيرة التي يستخدمها الناس في حياتهم اليومية، مما يمنحها طابعًا فريدًا وممتعًا. بفضل تراثها الغني، تعد الهجة المصرية مصدر إلهام للأدب والفن، وتعكس جوهر الثقافة المصرية بشكل لافت ومميز."
                    : "The Egyptian dialect is known for its linguistic diversity and rich cultural heritage, reflecting a long history and a vibrant cultural tapestry. It includes a variety of famous phrases and expressions commonly used in everyday life, giving it a unique and enjoyable character. Thanks to its rich heritage, the Egyptian dialect serves as a source of inspiration for literature and art, vividly reflecting the essence of Egyptian culture."}
                </p>
              </div>
            </div>
          </div>
          {/* end of content and image conatiner  */}
        </div>
      </div>
      {/* end tradition  */}
      {/* culture part */}
      <div className="container mt-5">
        {/* a container for animation */}
        <div
          data-aos={language == "en" ? "fade-right" : "fade-left"}
          data-aos-duration="1500"
        >
          {/* the content and image container  */}
          <div className="d-flex traditinos">
            <div className="traditions-texts align-self-center ">
              <div className="container">
                <h4 className="text-center">
                  {" "}
                  {language == "en" ? "Culture" : "الثقافة"}
                </h4>
                <p>
                  {language == "ar"
                    ? "ثقافة مصر تعكس تنوعها الثقافي والتاريخي الغني، حيث تتجلى في التراث الفرعوني العريق والفنون الشعبية والأدب والموسيقى والمطبخ الشهير. تمزج الثقافة المصرية بين العراقة والحداثة، حيث تحتفظ بتقاليدها وتقاليدها القديمة مع استيعابها للتأثيرات العالمية المعاصرة. يشكل الدين والأسرة جزءًا أساسيًا من الهوية المصرية، وتتجلى قيم الضيافة والتضامن في المجتمع المصري."
                    : "Egypt's culture is characterized by its rich cultural and historical diversity, as it is reflected in the ancient Pharaonic heritage, folk and literary arts, music and cuisine. The Egyptian Culture Association is between tradition and modernity, as it maintains its ancient traditions and traditions while absorbing contemporary global influences. The value of religion and family is an essential part of Egyptian identity, and hospitality and solidarity are evident throughout Egyptian society."}
                </p>
              </div>
            </div>
            <img
              src="https://images.pexels.com/photos/3199399/pexels-photo-3199399.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          {/* end of content and image conatiner  */}
        </div>
      </div>
      {/* end culture part */}
      {/* currency part */}
      
      {/* end currency part  */}
    </div>
  );
}

export default AboutEgypt;
