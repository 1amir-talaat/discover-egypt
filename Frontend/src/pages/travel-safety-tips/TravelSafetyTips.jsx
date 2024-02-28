import "./travel-safety-tips.css";
import { useLanguage } from "../../context/LanguageContext";
import Places from "../../components/Home/Places";

function TravelSafetyTips() {
  const { language } = useLanguage();
  return (
    <div className="travel-safety-tips">
      <div className={`landing d-flex align-items-center ${language != "ar" ? "landing-en" : ""}`}>
        <h1 className="container">{language == "ar" ? "نصائح حول السفر الآمن إلى مصر" : "Health and safety travel tips"}</h1>zz
        <div className="shadow-1"></div>
        <div className="shadow-2"></div>
      </div>
      <div className="description mt-5 container">
        <h1 className="mb-3 display-6">{language == "ar" ? "أهم النصائح لقضاء تجربة سفر آمن" : "Travel Advice"}</h1>
        <p>
          {language == "ar"
            ? "العالم مثل الكتاب، ومن لا يسافر يقرأ منه صفحة واحدة فقط، وهنا في مصر، ستقرأ الكثير من الصفحات، لذلك تُعد مصر بما حباها الله من تنوع جغرافي وثقافي وجهة مثالية حاضنة لكافة المسافرين والمسافرات من كافة دول العالم، الأمر الذي لن تخطئ قدماك أينما سرت في كافة مدن مصر من كم الفنادق والمطاعم والمتاحف والفعاليات الثقافية والترفيهية والمعالم السياحية التي استأنفت أوج نشاطها وأصبحت على أهبة الاستعداد لاستضافة زائري مصر بل والاحتفاء بهم باعتبارهم في بلدهم الثاني، من هنا نقدم لك في السطور التالية أهم النصائح والإرشادات المُحًدثة لقضاء تجربة سفر ممتعة تحيطها أجواء من الأمن والأمان، سواء كانت وجهتك إلى القاهرة أو الإسكندرية أو شرم الشيخ والغردقة على البحر الأحمر أو أسوان والأقصر في الجنوب أو الأماكن التاريخية مثل الأهرامات ومعابد الكرنك والكثير من المواقع الأثرية الرائعة. وبطبيعة الحال، فإن أفضل وسيلة لتحقيق أقصى استفادة من أي رحلة هو الاطلاع على أحدث النصائح الصحية والأمنية مع اتخاذ كافة الاحتياطات والتدابير قبل وأثناء السفر، إليك هنا بعض النصائح التي تضمن لك قضاء تجربة مصرية خالية من أي توتر."
            : "The traveler within us is always planning that next trip. Across Egypt, hotels, restaurants, and tourist attractions are open and ready to be enjoyed. Of course, the best way to make the most of any trip is to stay up to speed on the latest health and travel advice, and to take practical precautions. So, whether you’re planning a luxury getaway or a cross-country road trip, here are some tips to make your Egyptian adventure worry- and stress-free."}
        </p>
        <img className="travel-img " src="./src/pages/travel-safety-tips/img/img-2.jpeg" alt="" />
        <h1 className="mb-3 display-6">{language == "ar" ? "هل مصر بلد آمنة؟" : "Is Egypt Safe?"}</h1>
        <p>
          {language == "ar"
            ? "نعم، تنعم مصر بالأمن والأمان على أراضيها، بل تضمن لزائريها تجربة سفر مثيرة وفي نفس الوقت آمنة. في الوقت الحالي، فتحت مصر أبوابها على مصراعيها لاستقبال السائحين من كافة البلاد للاستمتاع بتجربة سفر خالية من أي تعقيدات، وفي ضوء الانفتاح الجديد، أعلنت مؤخرًا شركات الطيران المصرية عن تحليقها إلى وجهات دولية جديدة في عدة قارات خلال العام الجاري، وذلك بهدف تعزيز موقعها التنافسي على القطاع الدولي وربط العالم بمصر. في نفس السياق، ننصح بحترام القوانين والثقافة المحلية، بما في ذلك العادات والطقوس، ونشجع على التنبه لما يحيط بك ومراجعة الإرشادات والتعليمات التي تصدرها الحكومة المصرية من خلال منصاتها المختلفة."
            : "Yes, Egypt is safe for male and female tourists. Egypt has opened its doors wide to receive tourists from countries all over the world. In fact, in light of the new openness, Egyptian airlines recently announced flights to various international destinations. Of course, as with travel to any other country in the world, be respectful of local laws and culture, including specific customs around Ramadan, and be mindful of your surroundings. Also be sure to consult travel advisories before your trip."}
        </p>
        <h1 className="mb-3 display-6">{language == "ar" ? "تعرف على آخر المستجدات الصحية" : "Stay Informed"}</h1>
        <p>
          {language == "ar"
            ? " يمكنك الاطلاع على آخر نصائح الأمن والسلامة من خلال إتباع الإرشادات الحكومية التي تحمل في طياتها نصائح مهمة للمسافرين سواء من داخل مصر أو خارجها. على سبيل المثال لا الحصر، أطلقت وزارة الصحة المصرية تطبيقًا إلكترونيًا يمكن تنزيله على الهواتف الذكية يحمل اسم (مصر)، ويستعرض التطبيق أحدث التوصيات الصحية، كما تتيح الخدمة الإلكترونية للمستخدمين حجز وإدارة المواعيد في مراكز الرعاية الصحية، كما أتاحت الوزارة خطًا          ساخنًا على الرقم (105) للرد على أي استفسارات أو شكاوى من قبل المسافرين، وتقديم الاستشارات الطبية من خلال أطباء يعملون على قدم وساق على مدار الساعة، كما يمكن زيارة موقع الوزارة الإلكتروني لمعرفة آخر تحديثات وأخبار تتعلق بقوانين وسياسات السفر."
            : "Following government guidelines can provide the latest advice about travel to and within Egypt. The Egyptian Ministry of Health has a dedicated mobile app, Egypt, which offers current healthcare recommendations, as well as a hotline available at 105. You can also visit the ministry’s website for the most recent news on travel policies."}
        </p>
        <h1 className="mb-3 display-6">
          {language == "ar" ? "كيف يمكن التصرف في حالة الطوارئ أثناء زيارة مصر" : "What to Do in Case of Emergency When You’re in Egypt"}
        </h1>
        <p>
          {language == "ar"
            ? "في حالة الطوارئ، اتصل برقم الشرطة (122)، كما يمكنك طلب سيارة الإسعاف على الرقم (123)، وتعمل الجهات الحكومية على ضمان وصول الخدمة في أسرع وقت ممكن يصل لدقائق معدودة، لذلك من الأفضل الاحتفاظ بتلك القائمة من مراكز الاتصال المهمة واستخدامها في حالات الطوارئ."
            : "n case of an emergency, dial 122 for the police. For an ambulance, dial 123. Looking for something else? Here are some other useful contacts, including the Highway Patrol."}
        </p>
      </div>

      <Places />
    </div>
  );
}

export default TravelSafetyTips;
