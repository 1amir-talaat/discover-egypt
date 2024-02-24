import { useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import Places from "../Home/Places";
import "./PlanYourTrip.css";
import AOS from "aos";
import "aos/dist/aos.css";

function PlanYourTrip() {
  const { language } = useLanguage();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="image-container">
        <img src="https://images.pexels.com/photos/15127140/pexels-photo-15127140/free-photo-of-a-mother-and-daughter-walking-in-the-giza-necropolis.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ objectFit: 'cover' }} alt="" />      <h1 className={language == "en" ? "image-text-en" : "image-text-ar"}>
          {language == "en" ? "Plan Your Trip " : "خطط رحلتك"}
        </h1>
      </div>

      <div className="container mt-5">

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

        <div className="mt-5" data-aos={language == "ar" ? "fade-left" : "fade-right"} data-aos-duration="1500">
          <div className="d-flex traditinos mt-4">
            <img src="https://images.pexels.com/photos/1210622/pexels-photo-1210622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="traditions-texts align-self-center ">
              <h4 className="text-center">{language == "en" ? "Road Trip Guide" : "دليل الرحلات بالسيارة"}
              </h4>
              <p>{language == "en" ? "Embarking on a road trip in Egypt? Here's what you need to know: Plan your route, keep your vehicle in good shape, and drive defensively. Stay connected with a map or GPS, and explore off the beaten path for hidden treasures. Respect local customs, prioritize safety, and enjoy the journey, stopping often to soak in the sights and create lasting memories." : "الشروع في رحلة برية في مصر؟ إليك ما تحتاج إلى معرفته: خطط لمسارك، وحافظ على سيارتك في حالة جيدة، وقم بالقيادة بشكل دفاعي. ابق على اتصال باستخدام الخريطة أو نظام تحديد المواقع العالمي (GPS)، واستكشف الطرق الوعرة بحثًا عن الكنوز المخفية. احترم العادات المحلية، وأعط الأولوية للسلامة، واستمتع بالرحلة، وتوقف كثيرًا للاستمتاع بالمناظر الطبيعية وخلق ذكريات دائمة."}</p>
            </div>
          </div>
        </div>

        <div className="mt-5 mb-5" data-aos={language == "en" ? "fade-left" : "fade-right"} data-aos-duration="1500">
          <div className="d-flex traditinos mt-4">
            <div className="traditions-texts align-self-center ">
              <h4 className="text-center">{language == "en" ? "Your best Egypt holiday awaits" : "اكتشف أفضل أماكن الاستجمام المناسبة لك"}
              </h4>
              <p>{language == "en" ? "Discover the perfect holiday in Egypt! Immerse yourself in the vibrant culture of Cairo, explore ancient wonders like the Great Pyramids of Giza, or sail the tranquil waters of the Nile. Unwind on the stunning beaches of the Red Sea in Hurghada, or dive into the rich history of Luxor and Aswan. Book now and embark on an unforgettable journey filled with lifelong memories." : "اكتشف العطلة المثالية في مصر! انغمس في ثقافة القاهرة النابضة بالحياة، واستكشف العجائب القديمة مثل أهرامات الجيزة الكبرى، أو أبحر في مياه النيل الهادئة. استمتع بالاسترخاء على شواطئ البحر الأحمر المذهلة في الغردقة، أو انغمس في التاريخ الغني للأقصر وأسوان. احجز الآن وانطلق في رحلة لا تُنسى ومليئة بذكريات مدى الحياة."}</p>
            </div>
            <img src="https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg?auto=compress&cs=tinysrgb&w=999999" alt="" />
          </div>
        </div>
      </div>


      <Places />
    </>
  );
}

export default PlanYourTrip;
