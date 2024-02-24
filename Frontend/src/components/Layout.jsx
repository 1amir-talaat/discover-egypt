import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  const outletStyles = location.pathname === "/" || location.pathname == "/search-results" ? { paddingTop: 143 } : {};
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
