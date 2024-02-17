import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "../../context/LanguageContext";
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
            "image": "https://i.pinimg.com/564x/19/ec/20/19ec20dfdac2e30efed516b95ca1e3b6.jpg"
        },
        {
            "id": 2,
            "country": "Sharm El Sheikh",
            "description": "Explore the stunning beaches of Sharm El Sheikh with its clear waters and diverse marine life. Perfect for snorkeling and relaxation.",
            "activities": ["surfing", "snorkeling", "relaxation"],
            "image": "https://mcdn.wallpapersafari.com/medium/40/51/DmWYMK.jpg"
        },
        {
            "id": 3,
            "country": "Dahab",
            "description": "Discover the laid-back vibes of Dahab's beaches with its golden sands and excellent diving spots. Ideal for windsurfing and kiteboarding.",
            "activities": ["kiteboarding", "diving", "windsurfing"],
            "image": "https://www.weseektravel.com/wp-content/uploads/2022/05/diving-dahab-blue-hole-3-720x960.jpg"
        },
        {
            "id": 4,
            "country": "Marsa Alam",
            "description": "Escape to the pristine beaches of Marsa Alam, where you can enjoy tranquility and explore colorful coral reefs. Great for snorkeling and relaxation.",
            "activities": ["surfing", "snorkeling", "relaxation"],
            "image": "https://img.freepik.com/free-photo/palm-alley-tropical-egyptian-beach_155003-10002.jpg?w=740&t=st=1708164193~exp=1708164793~hmac=4d8d13dd0e2cb655522f482f668adeea89dfdf6bc782b9f24976c8be711b2d82"
        },
        {
            "id": 5,
            "country": "Nuweiba",
            "description": "Relax on the tranquil beaches of Nuweiba, surrounded by stunning mountains and crystal-clear waters. Perfect for camping and stargazing.",
            "activities": ["camping", "stargazing", "hiking"],
            "image": "https://scenenow.com/Content/editor_api/images/WhatsApp%20Image%202021-11-17%20at%203.22.41%20PM-301385c5-b640-42bb-aa85-d78ea949109d.jpeg"
        },
        {
            "id": 6,
            "country": "Alexandria",
            "description": "Enjoy the Mediterranean charm of Alexandria's beaches with their soft sands and historic landmarks nearby. Ideal for family outings and beach picnics.",
            "activities": ["kayaking", "family outings", "picnics"],
            "image": "https://images.pexels.com/photos/15238652/pexels-photo-15238652/free-photo-of-boats-in-the-port-in-alexandria-egypt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ] : [
        {
            "id": 1,
            "country": "الغردقة",
            "description": "استمتع بجمال الغردقة مع شواطئها الرملية والشعاب المرجانية النابضة بالحياة. اكتشف الغوص والرياضات المائية.",
            "activities": ["ركوب الأمواج", "الغوص", "الرياضات المائية"],
            "image": "https://i.pinimg.com/564x/19/ec/20/19ec20dfdac2e30efed516b95ca1e3b6.jpg"
        },
        {
            "id": 2,
            "country": "شرم الشيخ",
            "description": "اكتشف شواطئ شرم الشيخ الرائعة مع مياهها الصافية والحياة البحرية المتنوعة. مثالي للغطس والاسترخاء.",
            "activities": ["ركوب الأمواج", "الغطس بالشمس", "الاسترخاء"],
            "image": "https://mcdn.wallpapersafari.com/medium/40/51/DmWYMK.jpg"
        },
        {
            "id": 3,
            "country": "دهب",
            "description": "اكتشف أجواء دهب الهادئة على شواطئها الرملية الذهبية والمواقع الممتازة للغوص. مثالي لركوب الأمواج ورياضة التزلج على الأمواج.",
            "activities": ["ركوب الأمواج", "الغوص", "رياضة التزلج على الأمواج"],
            "image": "https://www.weseektravel.com/wp-content/uploads/2022/05/diving-dahab-blue-hole-3-720x960.jpg"
        },
        {
            "id": 4,
            "country": "مرسى علم",
            "description": "ابتعد إلى شواطئ مرسى علم النقية، حيث يمكنك الاستمتاع بالهدوء واستكشاف الشعاب المرجانية الملونة. رائع للغطس والاسترخاء.",
            "activities": ["ركوب الأمواج", "الغطس بالشمس", "الاسترخاء"],
            "image": "https://img.freepik.com/free-photo/palm-alley-tropical-egyptian-beach_155003-10002.jpg?w=740&t=st=1708164193~exp=1708164793~hmac=4d8d13dd0e2cb655522f482f668adeea89dfdf6bc782b9f24976c8be711b2d82"
        },
        {
            "id": 5,
            "country": "نويبع",
            "description": "استرخ على شواطئ نويبع الهادئة، المحاطة بجبال خلابة ومياه واضحة كالكريستال. مثالية للتخييم ومشاهدة النجوم.",
            "activities": ["التخييم", "مشاهدة النجوم", "المشي لمسافات طويلة"],
            "image": "https://scenenow.com/Content/editor_api/images/WhatsApp%20Image%202021-11-17%20at%203.22.41%20PM-301385c5-b640-42bb-aa85-d78ea949109d.jpeg"
        },
        {
            "id": 6,
            "country": "الإسكندرية",
            "description": "استمتع بسحر البحر الأبيض المتوسط على شواطئ الإسكندرية مع رمالها الناعمة والمعالم التاريخية القريبة. مثالية للرحلات العائلية والنزهات على الشاطئ.",
            "activities": ["التجديف", "الرحلات العائلية", "النزهات"],
            "image": "https://images.pexels.com/photos/15238652/pexels-photo-15238652/free-photo-of-boats-in-the-port-in-alexandria-egypt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ];

    const beaches = language == "en" ? [
        {
            "id": 1,
            "beach_name": "Fjord Bay, Taba",
            "description": "Beautiful bay with crystal-clear waters and stunning scenery.",
            "price": 10,
            "image": "https://www.worldbeachguide.com/photos/large/fyord-bay-taba.webp"
        },
        {
            "id": 2,
            "beach_name": "Ras Abu Galoum, Dahab",
            "description": "Remote and pristine beach perfect for snorkeling and diving.",
            "price": "Free",
            "image": "https://bluebeachclub.com/wp-content/uploads/2017/02/Abu-Galum.jpg"
        },
        {
            "id": 3,
            "beach_name": "Nuweiba, Gulf of Aqaba",
            "description": "Tranquil beach with serene views of the Gulf of Aqaba.",
            "price": 5,
            "image": "https://media-cdn.tripadvisor.com/media/photo-s/19/fe/91/ee/77-title-c2-a0nuwebia.jpg"
        },
        {
            "id": 4,
            "beach_name": "Ras Um Sid, Sharm El Sheikh",
            "description": "Scenic beach known for its coral reefs and marine life.",
            "price": "Free",
            "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/19/a1/e6/ras-um-sid-view-from.jpg?w=1200&h=-1&s=1"
        },
        {
            "id": 5,
            "beach_name": "Sharm El Luli, Nature's Haven",
            "description": "Secluded beach with turquoise waters and abundant marine life.",
            "price": "Free",
            "image": "https://images.trvl-media.com/lodging/12000000/11580000/11572800/11572720/1f2e3b62.jpg?impolicy=resizecrop&rw=1200&ra=fit"
        },
        {
            "id": 7,
            "beach_name": "Hurghada Beach, Red Sea Coast",
            "description": "Popular beach destination with vibrant nightlife and water sports.",
            "price": "Free",
            "image": "https://mediaim.expedia.com/destination/1/3208131f06b5973425f78d0ba40b8880.jpg"
        },
        {
            "id": 13,
            "beach_name": "Golden Beach, Cairo Governorate",
            "description": "Popular beach destination with golden sands and clear waters.",
            "price": "Free",
            "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/99/90/dd/nile-river.jpg?w=1200&h=-1&s=1"
        },
        {
            "id": 14,
            "beach_name": "Palm Beach, Suez Governorate",
            "description": "Relaxing beach surrounded by palm trees in the Suez Governorate.",
            "price": 20,
            "image": "https://lh5.googleusercontent.com/p/AF1QipOTC7_5ALc9JDSYg66ljorVfARQmjEt71CRe9sW=s1600"
        },
        {
            "id": 15,
            "beach_name": "El Ein Bay Beach, Suez Governorate",
            "description": "Tranquil beach with calm waters, ideal for families.",
            "price": 15,
            "image": "https://lh5.googleusercontent.com/p/AF1QipOAYaKy3yuiqoDzc6p0XuNIUAYgxZPMbVLHHSxo=s1600"
        }
    ] : [
        {
            "id": 1,
            "beach_name": "خليج فْيُورْد، طابا",
            "description": "خليج جميل بمياهه الصافية والمناظر الخلابة.",
            "price": 10,
            "image": "https://www.worldbeachguide.com/photos/large/fyord-bay-taba.webp"
        },
        {
            "id": 2,
            "beach_name": "رَأس أبُو جَلوم، دهب",
            "description": "شاطئ نائي ونقي مثالي للغطس والغوص.",
            "price": "مجاناً",
            "image": "https://bluebeachclub.com/wp-content/uploads/2017/02/Abu-Galum.jpg"
        },
        {
            "id": 3,
            "beach_name": "نُويبع، الخليج العقبة",
            "description": "شاطئ هادئ مع مناظر هادئة لخليج العقبة.",
            "price": 5,
            "image": "https://media-cdn.tripadvisor.com/media/photo-s/19/fe/91/ee/77-title-c2-a0nuwebia.jpg"
        },
        {
            "id": 4,
            "beach_name": "رَأس أُم سِيد، شرم الشيخ",
            "description": "شاطئ متناغم معروف بالشعاب المرجانية والحياة البحرية.",
            "price": "مجاناً",
            "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/19/a1/e6/ras-um-sid-view-from.jpg?w=1200&h=-1&s=1"
        },
        {
            "id": 5,
            "beach_name": "شرم اللولي، ملاذ الطبيعة",
            "description": "شاطئ معزول بمياهه الزرقاء والحياة البحرية الغنية.",
            "price": "مجاناً",
            "image": "https://images.trvl-media.com/lodging/12000000/11580000/11572800/11572720/1f2e3b62.jpg?impolicy=resizecrop&rw=1200&ra=fit"
        },
        {
            "id": 7,
            "beach_name": "شاطئ الغردقة، ساحل البحر الأحمر",
            "description": "وجهة شاطئية شهيرة مع حياة ليلية نابضة بالحياة ورياضات مائية.",
            "price": "مجاناً",
            "image": "https://mediaim.expedia.com/destination/1/3208131f06b5973425f78d0ba40b8880.jpg"
        },
        {
            "id": 8,
            "beach_name": "شاطئ دهب، البلو هول والمنارة",
            "description": "بلدة شاطئية مسترخية معروفة بمواقع الغوص الخاصة بها وجوهرتها الهادئة.",
            "price": "مجاناً",
            "image": "https://deih43ym53wif.cloudfront.net/large_blue-hole-dahab-egypt-shutterstock_1269467029_6260deeb0c.jpeg"
        },
        {
            "id": 13,
            "beach_name": "شاطئ الذهبي، محافظة القاهرة",
            "description": "وجهة شاطئية شهيرة برمالها الذهبية ومياهها الزرقاء الواضحة.",
            "price": "مجاناً",
            "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/99/90/dd/nile-river.jpg?w=1200&h=-1&s=1"
        },
        {
            "id": 14,
            "beach_name": "شاطئ النخيل، محافظة السويس",
            "description": "شاطئ مريح محاط بأشجار النخيل في محافظة السويس.",
            "price": 20,
            "image": "https://lh5.googleusercontent.com/p/AF1QipOTC7_5ALc9JDSYg66ljorVfARQmjEt71CRe9sW=s1600"
        },
        {
            "id": 15,
            "beach_name": "شاطئ العين البيضاء، محافظة السويس",
            "description": "شاطئ هادئ بمياهه الهادئة، مثالي للعائلات.",
            "price": 15,
            "image": "https://lh5.googleusercontent.com/p/AF1QipOAYaKy3yuiqoDzc6p0XuNIUAYgxZPMbVLHHSxo=s1600"
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

                {/* Discover Egypt's stunning coastline // اكتشف ساحل مصر المذهل*/}
                <div className="row mt-5 mb-5">
                    <h1 style={{ fontSize: 50 }}>{language == "en" ? "Discover Egypt's stunning coastline" : "اكتشف ساحل مصر المذهل  "}</h1>
                    <Swiper
                        spaceBetween={15}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.5,
                            },
                            768: {
                                slidesPerView: 1.5,
                            },
                            992: {
                                slidesPerView: 2.5,
                            },
                            1400: {
                                slidesPerView: 2.5,
                            },
                        }}
                        dir={langDirection}
                        key={langDirection}
                        className="ms-3 mt-3"
                    >
                        {testing_data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="test w-100 position-relative seamagic-card">
                                    <div className="seamagic-best-for position-absolute z-1">
                                        <h5 className="text-white me-3 ms-3 mt-3">{language === "en" ? "Activities" : "أنشطة"}</h5>
                                        <div className="ps-4 pe-4">
                                            {item.activities.map((activity, activityIndex) => (
                                                <div key={activityIndex} className="badge text-white fw-light me-2 seamagic-activity" style={{ fontSize: 18 }}>{activity}</div>
                                            ))}
                                        </div>
                                    </div>
                                    <img className="w-100 rounded seamagic-image" src={item.image} alt={`Image for ${item.country}`} />
                                    <h1 className={`text-white position-absolute ${language === "en" ? "seamagic-title-en" : "seamagic-title-ar"} `}> {item.country}</h1>
                                    <p className={`text-white position-absolute ${language === "en" ? "seamagic-description-en" : "seamagic-description-ar"} `}>{item.description}</p>
                                    <button className={`btn position-absolute ${language === "en" ? "seamagic-button-en" : "seamagic-button-ar"} `}>{language === "en" ? "Explore More" : "أستكشف أكثر"}</button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Beaches // الشواطئ */}
                <div className="row mt-5">
                    <h1 style={{ fontSize: 50 }}>{language == "en" ? "Beaches" : "الشواطئ"}</h1>
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
                        {beaches.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="card beach-card border-0 shadow-sm w-100 position-relative mb-5">
                                    <img className="card-img-top beach-card-image" src={item.image} alt={item.description} />
                                    <div className="card-body">
                                        <p style={{ color: "gray", fontSize: 20 }}>
                                            {item.price === "مجاناً" || item.price === "Free" ? item.price : (language === "en" ? `$${item.price}` : `${item.price * 20} جنيه`)}
                                        </p>
                                        <h2>{item.beach_name}</h2>
                                        <h5>{item.description}</h5>
                                    </div>
                                    <hr className="beach-card-hr ms-4" />
                                    <button className="btn fw-bold" style={{ color: "rgb(83, 187, 123)" }}>
                                        <h5>{language === "en" ? "Book Now" : "أحجز الآن"}</h5>
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* sea // البحر */}
                <div className="row mt-5">
                    <h1 style={{ fontSize: 50 }}>{language == "en" ? "Sea" : "البحر"}</h1>
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

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Underwater // تحت المياه */}
                <div className="row mt-5">
                    <h1 style={{ fontSize: 50 }}>{language == "en" ? "Underwater" : "قاع البحر"}</h1>
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

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Discover the best sea destinations in Egypt // اكتشف أفضل الوجهات البحرية في مصر */}
                <div className="row mt-5">
                    <h1 style={{ fontSize: 50 }}>{language == "en" ? "Discover the best sea destinations in Egypt" : "اكتشف أفضل الوجهات البحرية في مصر"}</h1>
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

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default SeaMagic;
