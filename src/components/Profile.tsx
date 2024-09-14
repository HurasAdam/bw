import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import React, { useState } from 'react'
import TextBox from './core/TextBox'
import Button from './core/Button'
import UserProfileForm from './forms/UserProfileForm'
import { MdManageAccounts } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { UserPasswordForm } from './forms/UserPasswordForm'

const Profile = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);


const tabNames = [
 {label: "Zarządzaj profilem", icon:<MdManageAccounts className='w-7 h-7'/>},
 {label:   "Zarządzaj hasłem", icon:<RiLockPasswordFill className='w-7 h-7'/>}

]

const title = tabNames[selectedIndex]
  return (
    <div className='min-w-[800px]'>
           <h2 className=' px-8 my-12 text-slate-600 font-semibold text-xl flex items-center gap-2'>{title.icon}{title.label}</h2>
      <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
 
        <TabList className="flex justify-around ">
          
          <Tab
            className={`w-[40%] shadow-sm rounded-md ${selectedIndex === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Profil
          </Tab>
          <Tab
            className={`w-[40%] shadow-sm  rounded-md ${selectedIndex === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Hasło
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
    <UserProfileForm/>
          </TabPanel>

          {/* PASSWORD */}
          <TabPanel>
       <UserPasswordForm/>
          </TabPanel>
      
        </TabPanels>
      </TabGroup>
    </div>
  )
}

export default Profile
