import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { useLanguage } from "./context/LanguageContext";

function App() {
  const { language,toggleLanguage } = useLanguage();
  return (
    <div className={language=="en"?"dir-en":"dir-ar" }>
<<<<<<< HEAD
      <div className="bg-warning">

      <button className="btn btn-warning" onClick={()=>toggleLanguage()}>{language=="ar"?"English":"Arabic"}</button>
      </div>
=======
      <button onClick={()=>{
        toggleLanguage()
      }}>seif</button>
>>>>>>> main
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
