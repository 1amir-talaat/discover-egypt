import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { useLanguage } from "./context/LanguageContext";
import TravelSafetyTips from "./pages/travel-safety-tips/TravelSafetyTips";

function App() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div className={language == "en" ? "dir-en" : "dir-ar"}>
      <button
        className="position-fixed top-50 z-3 end-0 btn btn-primary"
        onClick={() => {
          toggleLanguage();
        }}
      >
        cahnge language
      </button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="travel-safety-tips" element={<TravelSafetyTips />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
