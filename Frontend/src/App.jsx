import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { useLanguage } from "./context/LanguageContext";
import TravelSafetyTips from "./pages/travel-safety-tips/TravelSafetyTips";

// hyman
import SeaMagic from "./components/Sea Magic/SeaMagic";
import NatureAndAdventure from "./components/Nature And Adventure/NatureAndAdventure";
import AntiquitiesAndCivilization from "./components/Antiquities and Civilization/AntiquitiesAndCivilization";
//seif
import AboutEgypt from "./components/AboutEgypt/AboutEgypt";
function App() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div className={language == "en" ? "dir-en" : "dir-ar"}>
      <button className="btn btn-warning" onClick={() => {toggleLanguage()}}>{language == "en"? "English" : "Arabic"}</button>
      <BrowserRouter>
        <Routes>
          <Route path="/DiscoverEgypt" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="travel-safety-tips" element={<TravelSafetyTips />} />
          </Route>
          {/* sea magic  */}
          <Route path="/DiscoverEgypt/SeaMagic" element={<SeaMagic />}></Route>
          {/* Nature and Adventure  */}
          <Route path="/DiscoverEgypt/NatureAndAdventure" element={<NatureAndAdventure />}></Route>
          {/* Antiquities and Civilization */}
          <Route path="/DiscoverEgypt/AntiquitiesAndCivilization" element={<AntiquitiesAndCivilization />}></Route>
          {/* About Egypt  */}
          <Route path="/DiscoverEgypt/AboutEgypt" element={<AboutEgypt />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
