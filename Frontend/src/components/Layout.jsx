import { Outlet } from "react-router-dom";
import NavbarComponent from "./Navbar";
import Footer from "./Footer";

function Layout() {

  
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
