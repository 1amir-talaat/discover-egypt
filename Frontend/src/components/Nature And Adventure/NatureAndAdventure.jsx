import Places from "../Home/Places";
import { useLanguage } from "../../context/LanguageContext";
import heroVideo from "./video/NatureAndAdventure.mp4";
import "./NatureAndAdventure.css";

function NatureAndAdventure() {
  const { language } = useLanguage();

  const AntiquitiesAndCivilizationPlaces =
    language == "en"
      ? [
        {
          id: 1,
          place_name: "Ras Mohammed Reserve",
          description: "Enjoy the beauty of the marine environment in Ras Mohammed Reserve, with diving, snorkeling, and sea fishing trips.",
          image: "https://nashaplaneta.net/africa/egypt/img_sharm/ras-muhammed1.jpg",
        },
        {
          id: 2,
          place_name: "Siwa Oasis",
          description: "Relax amidst the beauty of the oasis and desert landscapes in Siwa, and discover many hot springs and ancient temples.",
          image: "https://static.toiimg.com/photo/98546238/SIWA.jpg?width=748&resize=4",
        },
        {
          id: 3,
          place_name: "Wadi El Rayan Protectorate",
          description:
            "Explore the stunning nature in Wadi El Rayan Protectorate, with beautiful waterfalls, blue lakes, and trails for jeep tours and kayaking.",
          image: "https://egyptopia.com/shared/images/z/middle/z_afd-b-_2780.jpg",
        },
        {
          id: 4,
          place_name: "Mount Catherine",
          description: "Enjoy climbing adventure in Mount Catherine, and admire the breathtaking mountain views and stunning sunrises.",
          image: "https://www.egypttoday.com/siteimages/Larg/35169.jpg",
        },
        {
          id: 5,
          place_name: "Hammamat Valley",
          description:
            "Enjoy the breathtaking natural landscapes and hot springs in Hammamat Valley, which are ideal for relaxation and camping trips.",
          image: "https://egyptsites.files.wordpress.com/2010/09/img_3754.jpg",
        },
        {
          id: 6,
          place_name: "Taba Island Reserve",
          description:
            "Explore the richness of marine life and the beauty of coral reefs in Taba Island Reserve, with opportunities for diving, snorkeling, and glass-bottom boat rides.",
          image: "https://www.connollycove.com/wp-content/uploads/2021/06/Taba-Featured-Image.png",
        },
        {
          id: 8,
          place_name: "Farafra Oasis",
          description:
            "Discover the beauty of Farafra Oasis located in the Western Desert, which features stunning natural landscapes and salt lakes.",
          image: "https://jakadatoursegypt.com/wp-content/uploads/2020/12/Farafra-Oasis-Egypt.jpg",
        },
        {
          id: 9,
          place_name: "Bermuda Island Reserve",
          description:
            "Enjoy diving and seeing rich marine life in Bermuda Island Reserve, which includes stunning coral reefs and enchanting submarines.",
          image: "https://www.bermuda.com/wp-content/uploads/2014/09/CoopersIsland-BermudaAerialMedia.jpg",
        },
        {
          id: 10,
          place_name: "Saint Catherine Park",
          description:
            "Climb the towering Mount Sinai in Saint Catherine Park, and enjoy the breathtaking natural views and thrilling mountain trips.",
          image: "https://www.stunningtravel.nl/wp-content/uploads/2021/03/St-Catherine-National-Park.jpg",
        },
        {
          id: 11,
          place_name: "Ras Sidr Reserve",
          description: "Enjoy diving in the clear blue waters and exploring rich coral reefs in Ras Sidr Reserve.",
          image: "https://egyptopia.com/shared/images/Geographic/40/middle/ras-sedr_2584_16602.jpg",
        },
        {
          id: 13,
          place_name: "Arish Reserve",
          description: "Enjoy watching migratory birds and wild plants in Arish Reserve, and enjoy safari trips and kayaking.",
          image: "https://beta.sis.gov.eg/media/381346/wonderful-picture-palm-trees-beach-al-arish-northern-egypt-784462-44.jpg",
        },
        {
          id: 14,
          place_name: "Pharaoh Oasis",
          description: "Enjoy the beauty of the green oasis and hot springs in Pharaoh Oasis, and discover ancient rock caves.",
          image: "https://www.ancient-origins.net/sites/default/files/field/image/Faiyum-Oasis.jpg",
        },
        {
          id: 17,
          place_name: "Mount Sinai",
          description: "Climb the sacred Mount Sinai and enjoy the enchanting sunset and stunning views from the mountain peak.",
          image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Mount_Moses.jpg",
        },
      ]
      : [
        {
          id: 1,
          place_name: "محمية رأس محمد",
          description: "استمتع بجمال البيئة البحرية في محمية رأس محمد، مع رحلات الغوص والسنوركل ورحلات الصيد البحري.",
          image: "https://nashaplaneta.net/africa/egypt/img_sharm/ras-muhammed1.jpg",
        },
        {
          id: 2,
          place_name: "واحة سيوة",
          description: "استرخِ في جمال الواحة والمناظر الصحراوية في سيوة، واكتشف العديد من الينابيع الساخنة والمعابد القديمة.",
          image: "https://static.toiimg.com/photo/98546238/SIWA.jpg?width=748&resize=4",
        },
        {
          id: 3,
          place_name: "محمية وادي الريان",
          description: "استكشف الطبيعة الخلابة في محمية وادي الريان، مع الشلالات الجميلة والبحيرات الزرقاء والمسارات لرحلات الجيب والتجديف.",
          image: "https://egyptopia.com/shared/images/z/middle/z_afd-b-_2780.jpg",
        },
        {
          id: 4,
          place_name: "جبل كاترين",
          description: "استمتع بمغامرة التسلق في جبل كاترين، واستمتع بمناظر الجبال الرائعة والشروق الخلابة.",
          image: "https://www.egypttoday.com/siteimages/Larg/35169.jpg",
        },
        {
          id: 5,
          place_name: "وادي الحمامات",
          description:
            "استمتع بالمناظر الطبيعية الخلابة والحمامات الطبيعية الساخنة في وادي الحمامات، والتي تعتبر مثالية لرحلات الاستجمام والتخييم.",
          image: "https://egyptsites.files.wordpress.com/2010/09/img_3754.jpg",
        },
        {
          id: 6,
          place_name: "محمية جزيرة طابا",
          description: "استكشف غنى الحياة البحرية وجمال الشعاب المرجانية في محمية جزيرة طابا، مع إمكانية الغوص والسنوركل وركوب الزوارق الزجاجية.",
          image: "https://www.connollycove.com/wp-content/uploads/2021/06/Taba-Featured-Image.png",
        },
        {
          id: 8,
          place_name: "واحة الفرافرة",
          description: "اكتشف جمال واحة الفرافرة الواقعة في الصحراء الغربية، والتي تضم مناظر طبيعية خلابة وبحيرات مالحة.",
          image: "https://jakadatoursegypt.com/wp-content/uploads/2020/12/Farafra-Oasis-Egypt.jpg",
        },
        {
          id: 9,
          place_name: "محمية جزيرة برمودا",
          description: "استمتع بالغطس ورؤية الحياة البحرية الغنية في محمية جزيرة برمودا، والتي تشمل أحواض مرجانية مذهلة وغواصات ساحرة.",
          image: "https://www.bermuda.com/wp-content/uploads/2014/09/CoopersIsland-BermudaAerialMedia.jpg",
        },
        {
          id: 10,
          place_name: "منتزه سانت كاترين",
          description: "تسلق جبل سيناء الشاهق في منتزه سانت كاترين، واستمتع بمناظر الطبيعة الخلابة وتجربة الرحلات الجبلية المثيرة.",
          image: "https://www.stunningtravel.nl/wp-content/uploads/2021/03/St-Catherine-National-Park.jpg",
        },
        {
          id: 11,
          place_name: "محمية رأس سدر",
          description: "استمتع بالغوص في المياه الزرقاء الصافية واستكشاف الشعاب المرجانية الغنية في محمية رأس سدر.",
          image: "https://egyptopia.com/shared/images/Geographic/40/middle/ras-sedr_2584_16602.jpg",
        },
        {
          id: 13,
          place_name: "محمية العريش",
          description: "استمتع بمشاهدة الطيور المهاجرة والنباتات البرية في محمية العريش، واستمتع برحلات السفاري والتجديف.",
          image: "https://beta.sis.gov.eg/media/381346/wonderful-picture-palm-trees-beach-al-arish-northern-egypt-784462-44.jpg",
        },
        {
          id: 14,
          place_name: "واحة فرعون",
          description: "استمتع بجمال الواحة الخضراء والينابيع الساخنة في واحة فرعون، واكتشف الكهوف الصخرية القديمة.",
          image: "https://www.ancient-origins.net/sites/default/files/field/image/Faiyum-Oasis.jpg",
        },
        {
          id: 17,
          place_name: "جبل موسى",
          description: "تسلق جبل موسى المقدس واستمتع بغروب الشمس الساحر والمناظر الخلابة من قمة الجبل.",
          image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Mount_Moses.jpg",
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
          <h1 style={{ fontSize: 42 }}>{language == "en" ? "Exploring the natural wonders of Egypt" : "استكشاف العجائب الطبيعية في مصر"}</h1>
          <h4 style={{ fontSize: 21, color: "#333333" }}>
            {language == "en"
              ? "Discover the natural wonders and limitless adventure of Egypt. From the stunning landscapes of the Sahara Desert to the dramatic valleys of the Sinai Peninsula, Egypt offers an unparalleled playground for outdoor enthusiasts. Embark on an exhilarating desert safari, where towering sand dunes stretch as far as the eye can see. For those seeking adrenaline-fueled thrills, trekking through the Sinai valleys promises unforgettable experiences. With its diverse terrain and endless adventure opportunities, Egypt invites travelers to immerse themselves in natural beauty and the excitement of the outdoors."
              : "اكتشف العجائب الطبيعية والمغامرات التي لا حدود لها في مصر. من المناظر الطبيعية الخلابة في الصحراء الكبرى إلى الوديان المثيرة في شبه جزيرة سيناء، توفر مصر ملعبًا لا مثيل له لعشاق الهواء الطلق. انطلق في رحلة سفاري صحراوية مبهجة، حيث تمتد الكثبان الرملية الشاهقة على مد البصر. بالنسبة لأولئك الذين يبحثون عن الإثارة التي تغذيها الأدرينالين، فإن الرحلات عبر وديان سيناء تعد بتجارب لا تنسى. بفضل تضاريسها المتنوعة وفرص المغامرة التي لا نهاية لها، تدعو مصر المسافرين إلى الانغماس في الجمال الطبيعي والإثارة في الهواء الطلق."}
          </h4>
        </div>
        <div className="row">
          <h1 style={{ fontSize: 42 }}>{language == "en" ? "Discover the Nature of Egypt" : "اكتشف الطبيعة في مصر    "}</h1>

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
                      <button className="btn fw-bold" style={{ color: "rgb(83, 187, 123)" }}>
                        <h5>{language === "en" ? "Learn More" : "أكتشف أكثر"}</h5>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Places />
    </>
  );
}

export default NatureAndAdventure;
