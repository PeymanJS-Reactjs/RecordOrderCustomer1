import { IconBase, IconContext, IconsManifest } from "react-icons";
import { BiSolidDashboard } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { GrLogout } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { LuRefreshCw } from "react-icons/lu";
import { SlHandbag } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const pathname = useLocation().pathname;

  const paths = [
    {
      title: "Dashboard",
      url: "/profile",
      icon: BiSolidDashboard,
    },
    {
      title: "Order History",
      url: "/profile/order_history",
      icon: LuRefreshCw,
    },
    {
      title: "Wishlist",
      url: "/profile/wishlist",
      icon: CiHeart,
    },
    {
      title: "Shpping Cart",
      url: "/profile/cart",
      icon: SlHandbag,
    },
    {
      title: "Settings",
      url: "/profile/settings",
      icon: IoSettingsOutline,
    },
    {
      title: "Log-out",
      url: "/profile/logout",
      icon: GrLogout,
    },
  ];

  return (
    <div className="w-1/4 shrink-0 bg-white h-fit rounded-lg border border-gray-100 ">
      <p className="font-medium text-lg px-4 pt-5 pb-2">Navigation</p>
      <div className="">
        {paths.map((item) => (
          <Link
            to={item.url}
            key={item.url}
            className={`${
              pathname === item.url ? "bg-gray-50 border-primary " : "border-transparent hover:bg-gray-50"
            } border-s-[3px] transition-all  p-4 flex items-center gap-3`}
          >
            <item.icon
              className={`${pathname === item.url ? "text-gray-900" : "text-gray-200"}  transition-all `}
              size={24}
            />
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
