// import css from "./Footer.module.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
        <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
