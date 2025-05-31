import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="container mx-auto py-20 flex gap-6">
      <Navbar />
      <div className="grow ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
