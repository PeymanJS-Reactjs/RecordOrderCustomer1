import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="px-[5%] py-20 flex gap-5">
      <Navbar />
      <div className="grow ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
