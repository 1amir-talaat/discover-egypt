import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import { useLanguage } from "./context/LanguageContext";
import Loader from "./components/Loader/Loader";
import "swiper/css";

import { useAuth } from "./context/AuthContext";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const SeaMagic = lazy(() => import("./components/Sea Magic/SeaMagic"));
const NatureAndAdventure = lazy(() => import("./components/Nature And Adventure/NatureAndAdventure"));
const AntiquitiesAndCivilization = lazy(() => import("./components/Antiquities and Civilization/AntiquitiesAndCivilization"));
const AboutEgypt = lazy(() => import("./components/AboutEgypt/AboutEgypt"));
const TravelSafetyTips = lazy(() => import("./pages/travel-safety-tips/TravelSafetyTips"));
const SearchResults = lazy(() => import("./components/search-results/SearchResults"));
const PlanYourTrip = lazy(() => import("./components/PlanYourTrip/PlanYourTrip"));
const ComingSoon = lazy(() => import("./components/ComingSoon/ComingSoon"));
const ImportantNumbers = lazy(() => import("./components/ImportantNumbers/ImportantNumbers"));
const HelpSupport = lazy(() => import("./components/HelpSupport/HelpSupport"));
const ErrorPage = lazy(() => import("./components/Error/Error"));
const City = lazy(() => import("./components/CityPage/City"));
const WillingToArrive = lazy(() => import("./components/Willing to arrive/WillingToArrive"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));

function App() {
  const { language } = useLanguage();
  const { user } = useAuth();

  return (
    <div className={`dir-${language}`}>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<Layout />}>
              {/* Define Home as the index route */}
              <Route path="/" element={<Home />} />
              <Route path="sea-magic" element={<SeaMagic />} />
              <Route path="nature-and-adventure" element={<NatureAndAdventure />} />
              <Route path="antiquities-and-civilization" element={<AntiquitiesAndCivilization />} />
              <Route path="about-egypt" element={<AboutEgypt />} />
              <Route path="travel-tips" element={<TravelSafetyTips />} />
              <Route path="search-results" element={<SearchResults />} />
              <Route path="plan-your-trip" element={<PlanYourTrip />} />
              <Route path="coming-soon" element={<ComingSoon />} />
              <Route path="important-numbers" element={<ImportantNumbers />} />
              <Route path="help-support" element={<HelpSupport />} />
              <Route path="place-details/:id" element={<City />} />
              <Route path="willing-to-arrive" element={<WillingToArrive />} />
              <Route path="willing-to-arrive" element={user ? <WillingToArrive /> : <Navigate to="/login" />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
