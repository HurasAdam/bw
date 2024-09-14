import React from "react";
import { GoStarFill } from "react-icons/go";
import {
  MdDashboard,
  MdOutlinePendingActions,
  MdSettings,
  MdTaskAlt,
} from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { Link,  useLocation } from "react-router-dom";
import { HiMiniHashtag } from "react-icons/hi2";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoIosBookmark } from "react-icons/io";
import { SiKnowledgebase } from "react-icons/si";
import clsx from "clsx";
import { useAppContext } from "../../contexts/AppContext";


const sidebarLinks = [
  {
    label: "Panel Admina",
    link: "/",
    icon: <MdDashboard />,
  },


  {
    label: "Tagi",
    link: "departments",
    icon: <HiMiniHashtag />,
  },
  {
    label: "Statystyki",
    link: "statistics",
    icon: <IoStatsChartSharp />,
  },

  {
    label: "Moj planer",
    link: "todos-board",
    icon: <MdOutlinePendingActions />,
  },
];

const ASidebar: React.FC = () => {
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
      <h1 className="flex gap-1.5 items-start">
        <p className="bg-blue-600 p-2 rounded-full">
          <SiKnowledgebase className="text-white text-xl font-black" />
        </p>
     <div className="flex flex-col">
     <span className="text-xl font-bold text-slate-300 ">Baza wiedzy</span>
     <span className="text-md font-bold text-secondary text-center">Admin</span>
     </div>
  
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

export default ASidebar;
