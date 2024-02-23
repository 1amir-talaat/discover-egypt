import { useLanguage } from "../../context/LanguageContext";
import "./PlanYourTrip.css";

function PlanYourTrip() {
  const { language } = useLanguage();
  const langDirection = language == "en" ? "ltr" : "rtl";

  const testing_data =
    language == "en" ?
      [] :
      []

  return (
    <>
      
    </>
  );
}

export default PlanYourTrip;
