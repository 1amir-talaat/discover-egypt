import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "../context/LanguageContext";
import heroVideo from "./video/SeaMagic.mp4";
import "./SeaMagic.css";

function SeaMagic() {
    const { language } = useLanguage();
    const langDirection = language == 'en' ? "ltr" : "rtl";


    const testing_data = language == "en" ? [
        {
            "id": 1,
            "country": "Hurghada",
            "description": "Experience the beauty of Hurghada with its sandy beaches and vibrant coral reefs. Discover diving and water sports.",
            "activities": ["surfing", "diving", "water sports"],
            "image": "https://images.pexels.com/photos/1050965/pexels-photo-1050965.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1260"
        },
        {
            "id": 2,
            "country": "Sharm El Sheikh",
            "description": "Explore the stunning beaches of Sharm El Sheikh with its clear waters and diverse marine life. Perfect for snorkeling and relaxation.",
            "activities": ["surfing", "snorkeling", "relaxation"],
            "image": "https://images.pexels.com/photos/18886592/pexels-photo-18886592/free-photo-of-view-of-the-sharm-el-maya-bay-in-sharm-el-sheikh-egypt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            "id": 3,
            "country": "Dahab",
            "description": "Discover the laid-back vibes of Dahab's beaches with its golden sands and excellent diving spots. Ideal for windsurfing and kiteboarding.",
            "activities": ["kiteboarding", "diving", "windsurfing"],
            "image": "https://images.pexels.com/photos/731588/pexels-photo-731588.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1260"
        },
        {
            "id": 4,
            "country": "Marsa Alam",
            "description": "Escape to the pristine beaches of Marsa Alam, where you can enjoy tranquility and explore colorful coral reefs. Great for snorkeling and relaxation.",
            "activities": ["surfing", "snorkeling", "relaxation"],
            "image": "https://images.pexels.com/photos/4195213/pexels-photo-4195213.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1260"
        },
        {
            "id": 5,
            "country": "Nuweiba",
            "description": "Relax on the tranquil beaches of Nuweiba, surrounded by stunning mountains and crystal-clear waters. Perfect for camping and stargazing.",
            "activities": ["camping", "stargazing", "hiking"],
            "image": "https://images.pexels.com/photos/4876853/pexels-photo-4876853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1260"
        },
        {
            "id": 6,
            "country": "Alexandria",
            "description": "Enjoy the Mediterranean charm of Alexandria's beaches with their soft sands and historic landmarks nearby. Ideal for family outings and beach picnics.",
            "activities": ["kayaking", "family outings", "picnics"],
            "image": "https://images.pexels.com/photos/333251/pexels-photo-333251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1260"
        }
    ] : [
        {
            "id": 1,
            "country": "الغردقة",
            "description": "استمتع بجمال الغردقة مع شواطئها الرملية والشعاب المرجانية النابضة بالحياة. اكتشف الغوص والرياضات المائية.",
            "activities": ["ركوب الأمواج", "الغوص", "الرياضات المائية"],
            "image": "https://images.pexels.com/photos/1050965/pexels-photo-1050965.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1260"
        },
        {
            "id": 2,
            "country": "شرم الشيخ",
            "description": "اكتشف شواطئ شرم الشيخ الرائعة مع مياهها الصافية والحياة البحرية المتنوعة. مثالي للغطس والاسترخاء.",
            "activities": ["ركوب الأمواج", "الغطس بالشمس", "الاسترخاء"],
            "image": "https://images.pexels.com/photos/18886592/pexels-photo-18886592/free-photo-of-view-of-the-sharm-el-maya-bay-in-sharm-el-sheikh-egypt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            "id": 3,
            "country": "دهب",
            "description": "اكتشف أجواء دهب الهادئة على شواطئها الرملية الذهبية والمواقع الممتازة للغوص. مثالي لركوب الأمواج ورياضة التزلج على الأمواج.",
            "activities": ["ركوب الأمواج", "الغوص", "رياضة التزلج على الأمواج"],
            "image": "https://images.pexels.com/photos/731588/pexels-photo-731588.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1260"
        },
        {
            "id": 4,
            "country": "مرسى علم",
            "description": "ابتعد إلى شواطئ مرسى علم النقية، حيث يمكنك الاستمتاع بالهدوء واستكشاف الشعاب المرجانية الملونة. رائع للغطس والاسترخاء.",
            "activities": ["ركوب الأمواج", "الغطس بالشمس", "الاسترخاء"],
            "image": "https://images.pexels.com/photos/4195213/pexels-photo-4195213.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1260"
        },
        {
            "id": 5,
            "country": "نويبع",
            "description": "استرخ على شواطئ نويبع الهادئة، المحاطة بجبال خلابة ومياه واضحة كالكريستال. مثالية للتخييم ومشاهدة النجوم.",
            "activities": ["التخييم", "مشاهدة النجوم", "المشي لمسافات طويلة"],
            "image": "https://images.pexels.com/photos/4876853/pexels-photo-4876853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1260"
        },
        {
            "id": 6,
            "country": "الإسكندرية",
            "description": "استمتع بسحر البحر الأبيض المتوسط على شواطئ الإسكندرية مع رمالها الناعمة والمعالم التاريخية القريبة. مثالية للرحلات العائلية والنزهات على الشاطئ.",
            "activities": ["التجديف", "الرحلات العائلية", "النزهات"],
            "image": "https://images.pexels.com/photos/333251/pexels-photo-333251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1260"
        }
    ];

    return (
        <>
            <div className="video-box">
                <video loop muted autoPlay playsInline >
                    <source src={heroVideo} type="video/mp4" />
                </video>
            </div>
            <div className="container mt-5 mb-5">

                <div className="row mb-5">
                    <h1 style={{ fontSize: 50 }}>{language == "en" ? "Sun and Sand Adventures in Egypt" : "مغامرات الشمس والرمال في مصر"}</h1>
                    <h4>
                        {language == "en"
                            ? "In addition to ancient wonders and captivating history, Egypt is not limited to mummies and pyramids only. Immerse yourself in the warm waters of the Red Sea teeming with colorful fish and coral reefs. Sail down the Nile River under a golden sunset. Enjoy relaxing on the sandy beaches, feeling the warm sun and calm waves. Kayak through hidden coves and lush mangroves. Fly on a kitesurf and feel the wind in your hair. This is Egypt, where sunny sands meet turquoise seas, providing an adventure playground beyond ancient wonders."
                            : "وبالإضافة إلى العجائب القديمة والتاريخ الآسر، فإن مصر لا تقتصر على المومياوات والأهرامات فقط. انغمس في مياه البحر الأحمر الدافئة المليئة بالأسماك الملونة والشعاب المرجانية. الإبحار في نهر النيل تحت غروب الشمس الذهبي. استمتع بالاسترخاء على الشواطئ الرملية، والشعور بالشمس الدافئة والأمواج الهادئة. استمتع بقوارب الكاياك عبر الخلجان المخفية وأشجار المانغروف الخضراء. قم بالطيران على متن طائرة ورقية واشعر بالرياح وهي تداعب شعرك. هذه هي مصر، حيث تجتمع الرمال المشمسة مع البحار الفيروزية، مما يوفر ملعبًا للمغامرات يفوق العجائب القديمة."
                        }
                    </h4>
                </div>

                <div className="row">
                    <h1 style={{ fontSize: 50 }}>{language == "en" ? "Make the Most of the Coast" : "حقق أقصى استفادة من الشاطئ"}</h1>
                    <Swiper
                        spaceBetween={15}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.5,
                            },
                            768: {
                                slidesPerView: 2.5,
                            },
                            1400: {
                                slidesPerView: 3,
                            },
                        }}
                        dir={langDirection}
                        key={langDirection}
                        className="ms-3"
                    >
                        {testing_data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="test w-100 position-relative">
                                    <div className="seamagic-best-for position-absolute z-1">
                                        <h5 className="text-white me-3 ms-3 mt-3">{language === "en" ? "Activities" : "أنشطة"}</h5>
                                        <div className="ps-4 pe-4">
                                            {item.activities.map((activity, activityIndex) => (
                                                <div key={activityIndex} className="badge text-white fw-light me-2 seamagic-activity" style={{ fontSize: 18 }}>{activity}</div>
                                            ))}
                                        </div>
                                    </div>
                                    <img className="w-100 rounded seamagic-image" src="https://images.pexels.com/photos/3214972/pexels-photo-3214972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={`Image for ${item.country}`} />
                                    <h1 className={`text-white position-absolute ${language === "en" ? "seamagic-title-en" : "seamagic-title-ar"} `}> {item.country}</h1>
                                    <p className={`text-white position-absolute ${language === "en" ? "seamagic-description-en" : "seamagic-description-ar"} `}>{item.description}</p>
                                    <button className={`btn position-absolute ${language === "en" ? "seamagic-button-en" : "seamagic-button-ar"} `}>{language === "en" ? "Explore More" : "أستكشف أكثر"}</button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </>
    );
}

export default SeaMagic;
