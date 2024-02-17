import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { useLanguage } from "./context/LanguageContext";

// hyman
import SeaMagic from "./components/Sea Magic/SeaMagic";
import Navbar from "./components/Navbar";
//seif
import AboutEgypt from "./components/AboutEgypt/AboutEgypt";
function App() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div className={language == "en" ? "dir-en" : "dir-ar"}>
      <button className="btn btn-danger" onClick={() => { toggleLanguage(); }}>
        {language == "en" ? "English" : "Arabic"}
      </button>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          {/* sea magic  */}
          <Route path="/seamagic" element={<SeaMagic />}></Route>
          {/* about egypt  */}
          <Route path="/aboutegypt" element={<AboutEgypt />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
