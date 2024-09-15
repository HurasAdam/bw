import { IoSettingsSharp } from "react-icons/io5";
import React from 'react'

const Drawer = () => {
  return (
<div className="drawer drawer-end z-20">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="cursor-pointer "><div className=" group p-2 rounded-lg bg-blue-50 shadow-xl border hover:bg-slate-600 transition-all "><IoSettingsSharp className="text-secondary group-hover:text-white"/></div></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      {/* <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li> */}
    </ul>
  </div>
</div>
  )
}

export default Drawer