import PropTypes from "prop-types";
import ActivitiesAndAttractionsContent from "./components/ActivitiesAndAttractionsContent";
import FoodAndDrinkContent from "./components/FoodAndDrinkContent";
import ExperiencesAndToursContent from "./components/ExperiencesAndToursContent";

function SeeGo({ type }) {
  console.log(type);
  let content = <ExperiencesAndToursContent />;

  switch (type) {
    case "Explore All":
      content = <ExperiencesAndToursContent />;
      break;
    case "Activities & Attractions":
      content = <ActivitiesAndAttractionsContent />;
      break;
    case "Food & Drink":
      content = <FoodAndDrinkContent />;
      break;
    case "Experiences & Tours":
      content = <ExperiencesAndToursContent />;
      break;
    default:
      content = <div>No content available for this type</div>;
  }

  return <>{content}</>;
}

SeeGo.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SeeGo;
