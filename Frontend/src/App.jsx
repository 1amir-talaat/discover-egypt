import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { useLanguage } from "./context/LanguageContext";
import TravelSafetyTips from "./pages/travel-safety-tips/TravelSafetyTips";

// hyman
import SeaMagic from "./components/Sea Magic/SeaMagic";
//seif
import AboutEgypt from "./components/AboutEgypt/AboutEgypt";
function App() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div className={language=="en"?"dir-en":"dir-ar" }>
      <button onClick={()=>{
        toggleLanguage()
      }}>seif</button>
      <BrowserRouter>
        <Routes>
          <Route path="/discoveregypt" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="travel-safety-tips" element={<TravelSafetyTips />} />
          </Route>
          {/* sea magic  */}
          <Route path="/discoveregypt/seamagic" element={<SeaMagic />}></Route>
          {/* about egypt  */}
          <Route path="/discoveregypt/aboutegypt" element={<AboutEgypt />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
