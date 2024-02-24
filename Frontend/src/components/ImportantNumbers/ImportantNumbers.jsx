import { useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import Places from "../Home/Places";
import "./ImportantNumbers.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ImportantNumbers() {
    const { language } = useLanguage();
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            {/* image and text  */}
            <div className="image-container">
                <img src="https://images.pexels.com/photos/15127140/pexels-photo-15127140/free-photo-of-a-mother-and-daughter-walking-in-the-giza-necropolis.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ objectFit: 'cover' }} alt="" />
                <h1 className={language == "en" ? "image-text-en" : "image-text-ar"}>
                    {language == "en" ? "Plan Your Trip " : "خطط رحلتك"}
                </h1>
            </div>
            {/* the container of the page */}
            <div className="container mt-5">
                {/* Emergency Numbers part */}
                <div className="mt-5" data-aos={language == "en" ? "fade-left" : "fade-right"} data-aos-duration="1500">
                    <div className="d-flex traditinos mt-4">
                        <div className="traditions-texts align-self-center ">
                            <h4 className="text-center">{language == "en" ? "Transportation" : "وسائل النقل"}
                            </h4>
                            <p>{language == "en" ? "Egypt has various ways to get around. Trains link cities and historical spots, showing both modern and ancient sides of Egypt. On the Nile, feluccas sail peacefully, reflecting Egypt's long history of sailing. In cities like Cairo, buses and taxis are common, making it easy to move around. Egypt is also adding new ways to travel, like ride-sharing and metro lines, keeping its transportation options fresh and convenient." : "مصر لديها طرق مختلفة للتجول. تربط القطارات بين المدن والأماكن التاريخية، وتظهر الجانبين الحديث والقديم من مصر. على نهر النيل، تبحر الفلوكات بسلام، مما يعكس تاريخ مصر الطويل في الإبحار. في مدن مثل القاهرة، تنتشر الحافلات وسيارات الأجرة، مما يسهل التنقل. تضيف مصر أيضًا طرقًا جديدة للسفر، مثل مشاركة الرحلات وخطوط المترو، مما يحافظ على خيارات النقل جديدة ومريحة."}</p>
                        </div>
                        <img src="https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
                {/* end of emergeny numbers part */}
                {/* cards part */}
                <div className="card-cont mb-5">
                    <div className="row">
                        <div className="col-md-12 col-lg-4 mb-2">
                            <div className="cur-card">
                                <h5>
                                    {language == "en" ? "Currency Exchange" : "تحويل العملات"}
                                </h5>
                                <p>
                                    {language == "en"
                                        ? "All banks in Egypr offer currency exchange services. Exchangebureaus are located at airports, some shopping centers and various other locations throughout the country. Credit card such as Visa, MasterCard and American Express are accepted throughout the kingdom. ATMs are also widely available, but the exchange must be from foreign currency to egyption currency."
                                        : "جميع البنوك في مصر تقدم خدمات صرف العملات. تبادل تقع المكاتب في المطارات وبعض مراكز التسوق و مواقع أخرى مختلفة في جميع أنحاء البلاد. بطاقة إئتمان، يتم قبول بطاقات مثل Visa وMasterCard وAmerican Express في جميع أنحاء المملكة. أجهزة الصراف الآلي متاحة أيضًا على نطاق واسع، ولكن يجب أن يكون الصرف من العملة الأجنبية إلى مصر عملة."}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 mb-2">
                            <div className="cur-card">
                                <h5>
                                    {language == "en"
                                        ? "Send and receive money"
                                        : "إرسال واستقبال الأموال"}
                                </h5>
                                <p>
                                    {language == "en"
                                        ? "You can send or receive money in Egypt by transferring funds online or through a bank that offers fast money transfer services."
                                        : "يمكنك إرسال أو استقبال الأموال في مصر عن طريق تحويل الأموال عبر الإنترنت أو من خلال أحد البنوك التي تقدم خدمة تحويل الأموال بسرعة خدمات."}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 mb-2">
                            <div className="cur-card">
                                <h5>{language == "en" ? "Taxes" : "الضرائب"}</h5>
                                <p>
                                    {language == "en"
                                        ? "Egypt imposes an indirect tax of 15% (VAT) on all goods and services purchased and sold by enterprises. There are some exceptions."
                                        : "تفرض مصر ضريبة غير مباشرة بنسبة 15% على جميع السلع والخدمات التي يتم شراؤها وبيعها من قبل الشركات. هناك بعض استثناءات."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of cards part */}
                {/* Telephone and code part */}
                <div className="mt-5" data-aos={language == "en" ? "fade-left" : "fade-right"} data-aos-duration="1500">
                    <div className="d-flex traditinos mt-4">
                        <div className="traditions-texts align-self-center ">
                            <h4 className="text-center">{language == "en" ? "Transportation" : "وسائل النقل"}
                            </h4>
                            <p>{language == "en" ? "Egypt has various ways to get around. Trains link cities and historical spots, showing both modern and ancient sides of Egypt. On the Nile, feluccas sail peacefully, reflecting Egypt's long history of sailing. In cities like Cairo, buses and taxis are common, making it easy to move around. Egypt is also adding new ways to travel, like ride-sharing and metro lines, keeping its transportation options fresh and convenient." : "مصر لديها طرق مختلفة للتجول. تربط القطارات بين المدن والأماكن التاريخية، وتظهر الجانبين الحديث والقديم من مصر. على نهر النيل، تبحر الفلوكات بسلام، مما يعكس تاريخ مصر الطويل في الإبحار. في مدن مثل القاهرة، تنتشر الحافلات وسيارات الأجرة، مما يسهل التنقل. تضيف مصر أيضًا طرقًا جديدة للسفر، مثل مشاركة الرحلات وخطوط المترو، مما يحافظ على خيارات النقل جديدة ومريحة."}</p>
                        </div>
                        <img src="https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
                {/* end for telephone and code part */}
                {/* Explore more part */}
                <Places />
            </div>
            {/* end for the container of the page */}




        </>
    );

}
export default ImportantNumbers;