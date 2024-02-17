import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { useLanguage } from "./context/LanguageContext";

// hyman
import SeaMagic from "./components/Sea Magic/SeaMagic";
function App() {
  const { language,toggleLanguage } = useLanguage();
  return (
    <div className={language=="en"?"dir-en":"dir-ar" }>
      <button onClick={()=>toggleLanguage()}>seif</button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          {/* hyman */}
          <Route path="/seamagic" element={<SeaMagic />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
