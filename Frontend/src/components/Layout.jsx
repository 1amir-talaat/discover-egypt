import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";

function Layout() {
  const location = useLocation();
  const validPaths = ["/sea-magic", "/nature-and-adventure", "/antiquities-and-civilization", "/about-egypt", "/travel-tips", "/plan-your-trip"];
  var outletStyles = validPaths.includes(location.pathname) ? {} : { paddingTop: 128 };

  return (
    <>
      <Navbar />
      <div style={outletStyles}>
        <Outlet style={outletStyles} />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
