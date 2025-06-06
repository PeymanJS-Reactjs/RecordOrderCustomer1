import { BiSolidDashboard } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { GrLogout } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { LuRefreshCw } from "react-icons/lu";
import { SlHandbag } from "react-icons/sl";

export const profilePaths = [
  {
    title: "Dashboard",
    url: "",
    icon: BiSolidDashboard,
  },
  {
    title: "Order History",
    url: "order_history",
    icon: LuRefreshCw,
  },
  {
    title: "Wishlist",
    url: "wishlist",
    icon: CiHeart,
  },
  {
    title: "Shpping Cart",
    url: "cart",
    icon: SlHandbag,
  },
  {
    title: "Settings",
    url: "settings",
    icon: IoSettingsOutline,
  },
  {
    title: "Log-out",
    url: "logout",
    icon: GrLogout,
  },
];

export const orderHistory = [
  {
    id: "3933",
    date: "4 Apr, 2021",
    total: "$135.00",
    productCount: 5,
    status: "Processing",
  },
  {
    id: "5045",
    date: "27 Mar, 2021",
    total: "$25.00",
    productCount: 1,
    status: "on the way",
  },
  {
    id: "5028",
    date: "20 Mar, 2021",
    total: "$250.00",
    productCount: 4,
    status: "Completed",
  },
  {
    id: "4600",
    date: "19 Mar, 2021",
    total: "$35.00",
    productCount: 1,
    status: "Completed",
  },
  {
    id: "4152",
    date: "18 Mar, 2021",
    total: "$578.00",
    productCount: 13,
    status: "Completed",
  },
  {
    id: "8811",
    date: "10 Mar, 2021",
    total: "$345.00",
    productCount: 7,
    status: "Completed",
  },
  {
    id: "3536",
    date: "5 Mar, 2021",
    total: "$560.00",
    productCount: 2,
    status: "Completed",
  },
  {
    id: "1374",
    date: "27 Feb, 2021",
    total: "$560.00",
    productCount: 2,
    status: "Completed",
  },
  {
    id: "7791",
    date: "25 Feb, 2021",
    total: "$560.00",
    productCount: 2,
    status: "Completed",
  },
  {
    id: "4846",
    date: "24 Feb, 2021",
    total: "$23.00",
    productCount: 1,
    status: "Completed",
  },
  {
    id: "5948",
    date: "20 Feb, 2021",
    total: "$23.00",
    productCount: 1,
    status: "Completed",
  },
  {
    id: "1577",
    date: "12 Oct, 2020",
    total: "$23.00",
    productCount: 1,
    status: "Completed",
  },
];

export const OrderTrackerSteps = [
  { id: 1, name: "Order received", status: "completed" },
  { id: 2, name: "Processing", status: "current" },
  { id: 3, name: "On the way", status: "upcoming" },
  { id: 4, name: "Delivered", status: "upcoming" },
];

export const OrderProducts = [
  {
    name: "Red Capsicum",
    image: "/images/product/red-capsicum.png",
    price: 14.0,
    quantity: 5,
    subtotal: 70.0,
  },
  {
    name: "Green Capsicum",
    image: "/images/product/green-capsicum.png",
    price: 14.0,
    quantity: 2,
    subtotal: 28.0,
  },
  {
    name: "Green Chili",
    image: "/images/product/green-chili.png",
    price: 26.7,
    quantity: 10,
    subtotal: 267.0,
  },
];
