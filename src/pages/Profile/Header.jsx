import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { profilePaths } from "../../constant";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const pathname = useLocation().pathname.split("/")[2] ?? "";
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  return (
    <div className='lg:hidden fixed top-0 left-0 right-0'>
      <div className='flex justify-between items-center p-4 shadow-md bg-white'>
        <div className='flex items-center gap-2'>
          <RxHamburgerMenu onClick={() => setOpenMenu(true)} className='p-2 size-10 bg-gray-50 text-gray-800 rounded-md' />
          <h1 className='text-2xl font-medium'>Profile</h1>
        </div>
        <div className='flex items-center gap-1.5'>
          <img className='rounded-full size-10 object-cover' src='/images/eprof.jpg' alt='profile' />
          <p className='text-gray-800 text-sm'>Dianne Russell</p>
        </div>
      </div>
      {createPortal(
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transition-all ${
            openMenu ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setOpenMenu(false)}>
          <div
            className={`absolute top-0 left-0 w-80 h-full  bg-white shadow-lg p-4 transition-all duration-300  ${openMenu ? "" : "-translate-x-full"}`}
            onClick={e => e.stopPropagation()}>
            <div className='flex items-center gap-2 mb-4'>
              <img src='/logo.png' alt='logo' className='size-10 ' />
              <h2 className='text-xl font-semibold'>Profile</h2>
            </div>
            {profilePaths.map(item => (
              <Link
                onClick={() => setOpenMenu(false)}
                to={item.url}
                key={item.url}
                className={`${pathname === item.url ? "bg-primary text-white" : "text-gray-700  "}  transition-all p-4 flex items-center gap-3 rounded-md`}>
                <item.icon className={`${pathname === item.url ? "text-white" : "text-gray-700"}  transition-all `} size={24} />
                <p className='text-inherit'>{item.title}</p>
              </Link>
            ))}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Header;
