import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className='lg:px-[1%] xl:p-[5%] lg:py-20 flex lg:gap-3 xl:gap-7'>
      <Navbar />
      <div className='grow '>
        <Header />
        <div className='md:p-4 xl:p-0 mt-[80px] lg:mt-0'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
