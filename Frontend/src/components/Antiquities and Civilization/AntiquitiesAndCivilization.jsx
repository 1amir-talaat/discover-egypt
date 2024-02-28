import Places from "../Home/Places";
import { useLanguage } from "../../context/LanguageContext";
import heroVideo from "./video/AntiquitiesAndCivilization.mp4";
import "./AntiquitiesAndCivilization.css";

function AntiquitiesAndCivilization() {
  const { language } = useLanguage();

  const AntiquitiesAndCivilizationPlaces =
    language == "en"
      ? [
        {
          id: 11,
          place_name: "Temple of Edfu",
          description: "Discover the well-preserved Temple of Edfu, dedicated to the falcon god Horus, on the west bank of the Nile River.",
          image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Temple_Edfou_Egypte.jpg",
        },
        {
          id: 12,
          place_name: "Temple of Hatshepsut",
          description:
            "Visit the mortuary temple of Queen Hatshepsut, known for its striking architecture and location in the cliffs of Deir el-Bahari.",
          image: "https://www.egypttoursportal.com/images/2018/09/Queen-Hatshepsut-Temple-Egypt-Tours-Portal-1.jpg",
        },
        {
          id: 13,
          place_name: "Valley of the Nobles",
          description:
            "Explore the Valley of the Nobles, a necropolis in Luxor known for its beautifully decorated tombs belonging to ancient Egyptian nobles.",
          image: "https://www.tripsinegypt.com/wp-content/uploads/2019/01/Valley-of-the-Nobels-Trips-in-Egypt.jpg",
        },
        {
          id: 14,
          place_name: "Temple of Kom Ombo",
          description:
            "Visit the double temple of Kom Ombo, dedicated to the crocodile god Sobek and the falcon god Horus, overlooking the Nile River.",
          image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Kom_Ombo_Portal_04.jpg",
        },
        {
          id: 15,
          place_name: "Temple of Medinet Habu",
          description:
            "Explore the Temple of Medinet Habu, dedicated to Ramses III, and admire its well-preserved reliefs and colorful hieroglyphics.",
          image: "https://www.thefivefoottraveler.com/wp-content/uploads/2020/05/DSC00889-980x653.jpg",
        },
        {
          id: 16,
          place_name: "Temple of Luxor",
          description:
            "Witness the grandeur of the Temple of Luxor, dedicated to the gods Amun, Mut, and Chons, with its colossal statues and towering obelisks.",
          image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Templo_de_Luxor%2C_Luxor%2C_Egipto%2C_2022-04-01%2C_DD_01.jpg",
        },
        {
          id: 17,
          place_name: "Medinet Madi",
          description:
            "Discover the ruins of the Greco-Roman city of Medinet Madi, featuring a well-preserved temple dedicated to the crocodile god Sobek.",
          image: "https://upload.wikimedia.org/wikipedia/commons/6/61/Medinet_Madi_05.JPG",
        },
        {
          id: 18,
          place_name: "Tanis",
          description:
            "Explore the ancient city of Tanis, known for its archaeological treasures, including the royal tombs and the Great Temple of Amun.",
          image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ruins_of_Tanis.jpg",
        },
        {
          id: 19,
          place_name: "Temple of Seti I at Qurna",
          description: "Visit the mortuary temple of Seti I, located in the Theban Necropolis, and admire its impressive reliefs and inscriptions.",
          image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Seti_I_Temple_at_Qurna.jpg",
        },
        {
          id: 20,
          place_name: "Museum of Islamic Art",
          description:
            "Explore the Museum of Islamic Art in Cairo, showcasing a vast collection of Islamic artifacts, including textiles and ceramics.",
          image: "https://images.museumwnf.org/full/museums/eg/1/1.jpg",
        },
      ]
      : [
        {
          id: 11,
          place_name: "معبد إدفو",
          description: "اكتشف معبد إدفو المحفوظ جيدًا، المكرس لآلهة الصقر حورس، على الضفة الغربية لنهر النيل.",
          image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Temple_Edfou_Egypte.jpg",
        },
        {
          id: 12,
          place_name: "معبد حتشبسوت",
          description: "قم بزيارة معبد الملكة حتشبسوت، المشهور بعمارته البارزة وموقعه في جبال دير البحري.",
          image: "https://www.egypttoursportal.com/images/2018/09/Queen-Hatshepsut-Temple-Egypt-Tours-Portal-1.jpg",
        },
        {
          id: 13,
          place_name: "وادي الأشراف",
          description: "استكشف وادي الأشراف، مقبرة في الأقصر معروفة بقبورها الجميلة المزينة التي تنتمي إلى النبلاء المصريين القدماء.",
          image: "https://www.tripsinegypt.com/wp-content/uploads/2019/01/Valley-of-the-Nobels-Trips-in-Egypt.jpg",
        },
        {
          id: 14,
          place_name: "معبد كوم أمبو",
          description: "زور المعبد المزدوج لكوم أمبو، المكرس لآلهة التمساح سوبيك وآلهة الصقر حورس، المطل على نهر النيل.",
          image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Kom_Ombo_Portal_04.jpg",
        },
        {
          id: 15,
          place_name: "معبد مدينة هابو",
          description: "استكشف معبد مدينة هابو، المكرس لرمسيس الثالث، وأعجب بنقوشه المحفوظة جيدًا وخطوطه الهيروغليفية الملونة.",
          image: "https://www.thefivefoottraveler.com/wp-content/uploads/2020/05/DSC00889-980x653.jpg",
        },
        {
          id: 16,
          place_name: "معبد الأقصر",
          description: "شاهد عظمة معبد الأقصر، المكرس لآلهة أمون وموت وخونسو، بتماثيله الضخمة وأعمدته المرتفعة.",
          image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Templo_de_Luxor%2C_Luxor%2C_Egipto%2C_2022-04-01%2C_DD_01.jpg",
        },
        {
          id: 17,
          place_name: "مدينة المدينة",
          description: "اكتشف أطلال مدينة المدينة اليونانية الرومانية، التي تضم معبدًا محفوظًا جيدًا مخصصًا لآلهة التمساح سوبيك.",
          image: "https://upload.wikimedia.org/wikipedia/commons/6/61/Medinet_Madi_05.JPG",
        },
        {
          id: 18,
          place_name: "تانيس",
          description: "استكشف مدينة تانيس القديمة، المعروفة بكنوزها الأثرية، بما في ذلك المقابر الملكية ومعبد أمون العظيم.",
          image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ruins_of_Tanis.jpg",
        },
        {
          id: 19,
          place_name: "معبد سيتي الأول في قرنة",
          description: "زور معبد سيتي الأول المقام في مقبرة طيبة، وأعجب بنقوشه وكتاباته الرائعة.",
          image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Seti_I_Temple_at_Qurna.jpg",
        },
        {
          id: 20,
          place_name: "متحف الفن الإسلامي",
          description:
            "استكشف متحف الفن الإسلامي في القاهرة، الذي يعرض مجموعة واسعة من القطع الأثرية الإسلامية، بما في ذلك النسيج والخزف والمخطوطات.",
          image: "https://images.museumwnf.org/full/museums/eg/1/1.jpg",
        },
      ];
  return (
    <>
      <div className="video-box">
        <video loop muted autoPlay playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row mb-5">
          <h1 style={{ fontSize: 42 }}>{language == "en" ? "Uncover the wonders of ancient Egypt" : "اكتشف عجائب مصر القديمة"}</h1>
          <h4 style={{ fontSize: 21, color: "#333333" }}>
            {language == "en"
              ? "Egypt's rich heritage of antiquities and civilization is a marvel worth seeing. From the famous Pyramids of Giza to the mysterious Great Sphinx, these ancient wonders offer a glimpse into Egypt's great past. Along the fertile banks of the Nile River, the ancient Egyptians flourished, leaving behind treasures like hieroglyphs and artifacts that reveal their culture and remarkable creativity. Today, Egypt's ruins continue to captivate the world, showcasing a civilization that has stood the test of time."
              : "يعد تراث مصر الغني بالآثار والحضارة أعجوبة تستحق المشاهدة. من أهرامات الجيزة الشهيرة إلى تمثال أبو الهول الغامض، تقدم هذه العجائب القديمة لمحة عن ماضي مصر العظيم. على طول ضفاف نهر النيل الخصبة، ازدهر قدماء المصريين، تاركين وراءهم كنوزًا مثل الكتابة الهيروغليفية والتحف التي تكشف عن ثقافتهم وإبداعهم الرائع. واليوم، لا تزال آثار مصر تأسر العالم، حيث تعرض حضارة صمدت أمام اختبار الزمن."}
          </h4>
        </div>
        <div className="row">
          <h1 style={{ fontSize: 42 }}>{language == "en" ? "Discover the civilization of Egypt" : "اكتشف حضارة مصر    "}</h1>

          {AntiquitiesAndCivilizationPlaces.map((item) => {
            return (
              <>
                <div className="col-lg-4 col-md-6 col-sm-8 mt-3 ">
                  <div className="card text-start antiquities-card border-0 shadow ">
                    <img className="card-img-top h-100 w-100" src={item.image} alt="Title" />
                    <div className="card-body">
                      <h3 className={`card-title ${language === "ar" ? "text-end" : ""}`}>{item.place_name}</h3>
                      <p className={`card-text ${language === "ar" ? "text-end" : ""}`} style={{ fontSize: 17, color: "#333333" }}>
                        {item.description}
                      </p>
                      <hr className="beach-card-hr " />
                      <button className={`btn fw-bold ${language === "ar" ? "text-end" : ""}`} style={{ color: "rgb(83, 187, 123)" }}>
                        <h5>{language === "en" ? "Learn More" : "أكتشف أكثر"}</h5>
                      </button>
                    </div>
                  </div>
                </div >
              </>
            );
          })}
        </div>
      </div >
      <Places />
    </>
  );
}

export default AntiquitiesAndCivilization;
