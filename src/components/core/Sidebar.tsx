import React from "react";
import { FaTasks, FaTrashAlt, FaUsers } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import {
  MdDashboard,
  MdOutlineAddTask,
  MdOutlinePendingActions,
  MdSettings,
  MdTaskAlt,
} from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
// import { setOpenSidebar } from "../redux/authSlice";
import { IoLogoFirebase } from "react-icons/io5";
import clsx from "clsx";
import { useAppContext } from "../../contexts/AppContext";
// import { useAccountStore } from "../redux/store";

const sidebarLinks = [
  {
    label: "Dashboard",
    link: "/",
    icon: <MdDashboard />,
  },
  {
    label: "Wyszukaj",
    link: "search",
    icon: <MdDashboard />,
  },

  {
    label: "Działy i kontakty",
    link: "departments",
    icon: <FaTasks />,
  },
  {
    label: "Statystyki",
    link: "completed/completed",
    icon: <MdTaskAlt />,
  },
  {
    label: "Ulubione",
    link: "favourites",
    icon: <GoStarFill />,
  },
  {
    label: "Moj planer",
    link: "in-progress/in progress",
    icon: <MdOutlinePendingActions />,
  },
];

const Sidebar: React.FC = () => {
  const { user } = useAppContext();
  // const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const sidebarRoleBasedLinks = user?.isAdmin
    ? sidebarLinks
    : sidebarLinks.slice(0, 6);

  const closeSidebar = () => {
    // dispatch(setOpenSidebar(false))
  };

  interface INavLinkProps {
    element: {
      label: string;
      link: string;
      icon: React.ReactNode;
    };
  }
  const NavLink: React.FC<INavLinkProps> = ({ element }) => {
    const { link, icon, label } = element;
    return (
      <Link
        onClick={closeSidebar}
        className={clsx(
          "w-full lg:w-[95%] flex gap-2 px-3 py-2 rounded-full items-center text-indigo-200 text-base hover:bg-[#2564ed2d]",
          path === link.split("/")[0] ? "bg-blue-600 text-neutral-50" : ""
        )}
        to={link}
      >
        {icon}
        <span className="hover:text-[#2564ed]">{label}</span>
      </Link>
    );
  };

  return (
    <div className="w-full h-full flex flex-col gap-6 p-5">
      <h1 className="flex gap-1 items-center">
        <p className="bg-blue-600 p-2 rounded-full">
          <IoLogoFirebase className="text-white text-xl font-black" />
        </p>
        <span className="text-2xl font-bold text-slate-300 ">Baza wiedzy</span>
      </h1>

      <div className="flex-1 flex flex-col gap-1 py-8">
        {sidebarRoleBasedLinks.map((element) => {
          return <NavLink element={element} />;
        })}
      </div>

      <div className="">
        <button className="w-full flex gap-2 p-2 items-center text-lg text-gray-800">
          <MdSettings />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
