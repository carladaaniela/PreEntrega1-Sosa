import { Outlet as Page } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";

function Layout() {
  return (
    <>
      <NavBar />
      <Page />
      <Footer />
    </>
  );
}

export default Layout;
