import { Link, useLocation } from "react-router-dom";
import { profilePaths } from "../../constant";

const Navbar = () => {
  const pathname = useLocation().pathname.split("/")[2] ?? "";

  return (
    <div className='w-1/4 hidden lg:block sticky top-8 shrink-0 bg-white h-fit rounded-lg border border-gray-100 '>
      <p className='font-medium text-xl px-4 py-5'>Navigation</p>
      <div className=''>
        {profilePaths.map(item => (
          <Link
            to={item.url}
            key={item.url}
            className={`${
              pathname === item.url ? "bg-gray-50 border-primary text-gray-900" : "text-gray-600 border-transparent hover:bg-gray-50"
            } border-s-[3px] transition-all p-4 flex items-center gap-3`}>
            <item.icon className={`${pathname === item.url ? "text-gray-900" : "text-gray-200"}  transition-all `} size={24} />
            <p className='text-inherit'>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
