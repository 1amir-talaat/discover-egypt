import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { useLanguage } from "./context/LanguageContext";

// hyman
import SeaMagic from "./components/Sea Magic/SeaMagic";
import NatureAndAdventure from "./components/Nature And Adventure/NatureAndAdventure";
import AntiquitiesAndCivilization from "./components/Antiquities and Civilization/AntiquitiesAndCivilization";

//seif
import AboutEgypt from "./components/AboutEgypt/AboutEgypt";
import TravelSafetyTips from "./pages/travel-safety-tips/TravelSafetyTips";
function App() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div className={language == "en" ? "dir-en" : "dir-ar"}>
      <button className="btn btn-warning" onClick={() => {toggleLanguage()}}>{language == "en"? "English" : "Arabic"}</button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Home page */}
            <Route index element={<Home />} />
            {/* sea magic  */}
            <Route path="SeaMagic" element={<SeaMagic />}></Route>
            {/* Nature and Adventure  */}
            <Route path="NatureAndAdventure" element={<NatureAndAdventure />}></Route>
            {/* Antiquities and Civilization */}
            <Route path="AntiquitiesAndCivilization" element={<AntiquitiesAndCivilization />}></Route>
            {/* About Egypt  */}
            <Route path="AboutEgypt" element={<AboutEgypt />} />
            {/* Travel Safety Tips */}
            <Route path="travel-safety-tips" element={<TravelSafetyTips />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
