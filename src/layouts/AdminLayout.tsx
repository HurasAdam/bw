import React from 'react'

import ResponsiveSidebar from '../components/core/ResponsiveSidebar'

import { Outlet } from 'react-router-dom'
import Breadcrumbs from '../components/core/Breadcrumbs'
import ASidebar from '../components/admin/ASidebar'
import ANavbar from '../components/admin/ANavbar'
import { useAppContext } from '../contexts/AppContext'

const AdminLayout = () => {
    const { user, isLoading } = useAppContext();

    if(user){
  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
    <div className="w-[225px] h-screen bg-blue-950 sticky top-0 hidden xl:block">
      <ASidebar />
    </div>
    <div className="w-[80px] h-screen bg-blue-950 sticky top-0 hidden md:block xl:hidden">
     <ResponsiveSidebar/>
    </div>
    {/* <MobileSidebar />  */}

    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-950 scrollbar-track-white  ">
      <div className="px-16  bg-stone-50 rounded-tl-2xl rounded-bl-2xl min-h-full h-fit">
        <ANavbar  />
      <div className="  mt-4   ">  <Breadcrumbs/></div>
        <Outlet />
      </div>
    </div>
  </div>
  )}
}

export default AdminLayout