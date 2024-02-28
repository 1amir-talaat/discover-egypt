import { useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import Places from "../Home/Places";
import "./ImportantNumbers.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../AboutEgypt/AboutEgypt.css";


function ImportantNumbers() {
    const { language } = useLanguage();
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            {/* Hero's image and title  */}
            <div className="image-container">
                <img src="https://images.unsplash.com/photo-1553913861-c0fddf2619ee?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{ objectFit: 'cover' }} alt="" />
                <h1 className={language == "en" ? "image-text-en" : "image-text-ar"}>
                    {language == "en" ? "Useful Contacts" : "أرقام مفيدة"}
                </h1>
            </div>
            {/* the container of the page */}
            <div className="container mt-5">
                {/* Emergency Numbers part */}
                <div className="mt-5" data-aos={language == "en" ? "fade-left" : "fade-right"} data-aos-duration="1500">
                    <div className="d-flex traditinos mt-4">
                        <div className="traditions-texts align-self-center ">
                            <h4 className="text-center">
                                {language == "en" ? "Emergency numbers " : "أرقام الطوارئ"}
                            </h4>
                            {/* <p>{language == "en" ? "Egypt has various ways to get around. Trains link cities and historical spots, showing both modern and ancient sides of Egypt. On the Nile, feluccas sail peacefully, reflecting Egypt's long history of sailing. In cities like Cairo, buses and taxis are common, making it easy to move around. Egypt is also adding new ways to travel, like ride-sharing and metro lines, keeping its transportation options fresh and convenient." : "مصر لديها طرق مختلفة للتجول. تربط القطارات بين المدن والأماكن التاريخية، وتظهر الجانبين الحديث والقديم من مصر. على نهر النيل، تبحر الفلوكات بسلام، مما يعكس تاريخ مصر الطويل في الإبحار. في مدن مثل القاهرة، تنتشر الحافلات وسيارات الأجرة، مما يسهل التنقل. تضيف مصر أيضًا طرقًا جديدة للسفر، مثل مشاركة الرحلات وخطوط المترو، مما يحافظ على خيارات النقل جديدة ومريحة."}</p> */}
                            <p>
                                <b>{language == "en" ? "Police: " : "الشرطة: "}</b>122 <br />
                                <b>{language == "en" ? "Ambulance: " : " الإسعاف: "}</b>123 <br />
                                <b>{language == "en" ? " Fire: " : "المطافئ: "}</b>180 <br />
                                <b>{language == "en" ? "Civil Defense: " : " الدفاع المدني: "}</b>240140982401409724014099 <br />
                                <b>{language == "en" ? "For traffic accidents: " : " للحوادث المرورية: "}</b>0224021233 <br />
                                <b>{language == "en" ? "Tourist Police: " : " شرطة السياحة: "}</b>126 <br />
                                <b>{language == "en" ? "Traffic Police: " : " شرطة المرور: "}</b>128 <br />
                                <b>{language == "en" ? "Railway Police: " : " شرطة السكة الحديد: "}</b>145 <br />
                            </p>
                        </div>
                        <img src="https://imageio.forbes.com/specials-images/imageserve/63dd85f9589931f7cb19db01/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" alt="" />
                    </div>
                </div>
                {/* end of emergeny numbers part */}
                {/* cards part */}
                <div className="card-cont mb-5">
                    <div className="row">
                        <h1>{language=="en"?"Useful Contacts":"أرقام مفيدة"}</h1>
                        <div className="col-md-12 col-lg-4 mb-2">
                            <div className="cur-card">
                                <h5>
                                    {language == "en" ? "Tourism" : " الخدمات السياحية"}
                                </h5>
                                <p>
                                    <b>{language == "en" ? "Tourism Call Center: " : "مركز الاتصال السياحي: "}</b>19654 <br />
                                    <b>{language == "en" ? "General Directorate of Passports: " : " المديرية العامة للجوازات: "}</b>0227956301 <br />
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 mb-2">
                            <div className="cur-card">
                                <h5>
                                    {language == "en" ? "Consumer services" : "خدمات المستهلك"}
                                </h5>
                                <p>
                                    <b>{language == "en" ? "Municipal services: " : "البلديات: "}</b>139 <br />
                                    <b>{language == "en" ? "Electricity company emergency: " : "طوارئ الكهرباء: "}</b>121 <br />
                                    <b>{language == "en" ? "Consumer protection: " : "حماية المستهلك: "}</b>19588 <br />
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 mb-2">
                            <div className="cur-card">
                                <h5>{language == "en" ? "Public security" : "الأمن العام"}</h5>
                                <p>
                                    <b>{language == "en" ? "Egypt Public Security: " : "مديرية الأمن العام: "}</b>115 <br />
                                    <b>{language == "en" ? "Complaints and inquiries: " : "الشكاوي والاستعلامات: "}</b>16528 <br />
                                    <b>{language == "en" ? "Emergency medical consultation: " : "الاستشارات الطبية: "}</b>111 <br />
                                    <b>{language == "en" ? "General Directorate of Narcotics Control: " : "إدارة مكافة المخدرات: "}</b>16023 <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of cards part */}
                {/* Telephone and code part */}
                <div className="mt-5" data-aos={language == "ar" ? "fade-left" : "fade-right"} data-aos-duration="1500">
                    <div className="d-flex traditinos mt-4">
                        <img src="https://media.istockphoto.com/id/1127257348/photo/businessman-using-mobile-smartphone-and-connecting-cloud-computing-service-with-icon-customer.jpg?s=612x612&w=0&k=20&c=v0fqHJFrmlY1DAd4YQ4kGjCnv2QE9Ya37lXw6cS8Wwg=" alt="" />
                        <div className="traditions-texts align-self-center ">
                            <h4 className="text-center">
                                {language == "en" ? "Telephone code and providers" : "مفتاح الخط وشركات الاتصالات"}
                            </h4>
                            <p>
                                {language == "en" ? "Egypt's country code is +20. There are three mobile network providers in Egypt. These are:" : "مفتاح الخط هو 20+. يوجد ثلاث شبكات للهاتف المحمول في مصر:"} <br />
                                <b>{language == "en" ? "- We (by Telecom Egypt)" : "- وي (المصرية للاتصالات)"}</b> <br />
                                <b>{language == "en" ? "- Vodafone Egypt" : "- فودافون مصر"}</b> <br />
                                <b>{language == "en" ? "- Orange (formerly Mobinil)" : "- أورانج"}</b> <br />
                                <b>{language == "en" ? "- Etisalat" : "- اتصالات"}</b> <br />
                            </p>
                        </div>
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