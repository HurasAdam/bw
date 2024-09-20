import React from "react";
import { useAppContext } from "../contexts/AppContext";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/core/Sidebar";
import Navbar from "../components/core/Navbar";
import Breadcrumbs from "../components/core/Breadcrumbs";
import ResponsiveSidebar from "../components/core/ResponsiveSidebar";

const data = [
  {
    _id: "65c5bbf3787832cf99f28e6d",
    team: [
      "65c202d4aa62f32ffd1303cc",
      "65c27a0e18c0a1b750ad5cad",
      "65c30b96e639681a13def0b5",
    ],
    text: "New task has been assigned to you ",
    task: null,
    notiType: "alert",
    isRead: [],
    createdAt: "2024-02-09T05:45:23.353Z",
    updatedAt: "2024-02-09T05:45:23.353Z",
    __v: 0,
  },
  {
    _id: "65c5f12ab5204a81bde866ab",
    team: [
      "65c202d4aa62f32ffd1303cc",
      "65c30b96e639681a13def0b5",
      "65c317360fd860f958baa08e",
    ],
    text: "New task has been assigned to you ",
    task: {
      _id: "65c5f12ab5204a81bde866a9",
      title: "Test task",
    },
    notiType: "alert",
    isRead: [],
    createdAt: "2024-02-09T09:32:26.810Z",
    updatedAt: "2024-02-09T09:32:26.810Z",
    __v: 0,
  },
];

const DefaultLayout = () => {
  const { user, isLoading } = useAppContext();

  if (user) {
    return (
      <div className="w-full h-screen flex flex-col md:flex-row">
        <div className="w-[225px] h-screen bg-blue-950 sticky top-0 hidden xl:block">
          <Sidebar />
        </div>
        <div className="w-[80px] h-screen bg-blue-950 sticky top-0 hidden md:block xl:hidden">
         <ResponsiveSidebar/>
        </div>
        {/* <MobileSidebar />  */}

        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-950 scrollbar-track-white  ">
          <div className="px-5  bg-slate-50 rounded-tl-2xl rounded-bl-2xl min-h-full h-fit">
            <Navbar notifications={data} />
          <div className=" px-9 mt-4   ">  <Breadcrumbs/></div>
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
};

export default DefaultLayout;
