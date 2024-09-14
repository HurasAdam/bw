import React, { Fragment, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { FaUser, FaUserLock } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { getInitials } from "../../utils/index";
import { IoIosExit } from "react-icons/io";
import { MdAdminPanelSettings, MdDelete, MdModeEditOutline } from "react-icons/md";
import { useAccountStore } from "../redux/store";
import { useQuery } from "@tanstack/react-query";
import { userApi } from "../services/userApi";
import { IoPersonCircle } from "react-icons/io5";


import { useAppContext } from "../../contexts/AppContext";
import Dropdown from "./Dropdown";
import LoginForm from "../forms/LoginForm";
import Profile from "../Profile";

const UserAvatar: React.FC = ({ logoutHandler }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [openPassword, setOpenPassword] = useState<boolean>(false);
  const { user,showModal,showContentModal } = useAppContext();

  const navigate = useNavigate();

  const dropdownOptions = [
    {
      label: "Profil",
      onClick: () => showContentModal({
        isOpen:true, 

        
        childrenComponent:<Profile/>,
        triggerFn:()=>{
          ({ id})
      }}),
      icon: <FaUser />,
      
    },

    {
      label: "Admin",
      onClick: () =>navigate(`/admin`),
      icon: <MdAdminPanelSettings className="w-4 h-4" />,
    },
    {
      label: "Wyloguj",
      onClick: () =>navigate(`/admin`),
      icon: <IoIosExit className="w-4 h-4" />,
    },

    
        
  ];


const UserIcon = ()=>{
return(
  <div>
            <div className="w-8 h-8 2xl:w-9 2xl:h-9 flex items-center justify-center rounded-full bg-blue-600">
              <span className="text-white font-semibold">
                {getInitials(user?.name)}
              </span>
            </div>
          </div>
)
}


  return (
    <>
      <div>
      
        
<Dropdown ICON={<UserIcon/>  }options={dropdownOptions}/>
          
      </div>
    </>
  );
};

export default UserAvatar;
