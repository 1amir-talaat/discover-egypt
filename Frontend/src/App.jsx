import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { useLanguage } from "./context/LanguageContext";
import UsefulContacts from "./pages/UsefulContacts";

function App() {
  const { language,toggleLanguage } = useLanguage();
  return (
    <div className={language=="en"?"dir-en":"dir-ar" }>
      <div className="bg-warning">

      <button className="btn btn-warning" onClick={()=>toggleLanguage()}>{language=="ar"?"English":"Arabic"}</button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="useful-contacts" element={<UsefulContacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
