import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { useLanguage } from "./context/LanguageContext";

// hyman
import SeaMagic from "./components/Sea Magic/SeaMagic";
import NatureAndAdventure from "./components/Nature And Adventure/NatureAndAdventure";
import AntiquitiesAndCivilization from "./components/Antiquities and Civilization/AntiquitiesAndCivilization";
import ComingSoon from "./components/ComingSoon/ComingSoon";

//seif
import AboutEgypt from "./components/AboutEgypt/AboutEgypt";
import TravelSafetyTips from "./pages/travel-safety-tips/TravelSafetyTips";
function App() {
  const { language } = useLanguage();
  return (
    <div className={language == "en" ? "dir-en" : "dir-ar"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Home page */}
            <Route index element={<Home />} />
            {/* sea magic  */}
            <Route path="sea-magic" element={<SeaMagic />}></Route>
            {/* Nature and Adventure  */}
            <Route path="nature-and-adventure" element={<NatureAndAdventure />}></Route>
            {/* Antiquities and Civilization */}
            <Route path="antiquities-and-civilization" element={<AntiquitiesAndCivilization />}></Route>
            {/* About Egypt  */}
            <Route path="about-egypt" element={<AboutEgypt />} />
            {/* Travel Safety Tips */}
            <Route path="travel-tips" element={<TravelSafetyTips />} />
            {/* Coming Soon */}
            <Route path="coming-soon" element={<ComingSoon />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
