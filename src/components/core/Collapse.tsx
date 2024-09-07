import React, { useState } from 'react'
import { LuPlusCircle } from "react-icons/lu";
import { HiOutlineMinusCircle } from "react-icons/hi";
const Collapse:React.FC = ({children,header}) => {
  const [isChecked, setIsChecked]=useState(true);

const toggleHandler = ()=>{
  setIsChecked((prev)=>!prev)
}

return(
    <div className="bg-base-200 collapse">
  <input type="checkbox" className="peer" onClick={toggleHandler}  checked={isChecked}/>
  <div
    className="collapse-title bg-gray-100  text-blue-400 font-semibold peer-checked:text-blue-500">
  <span className='flex items-center gap-3.5'>
  {isChecked ? <HiOutlineMinusCircle className='w-6 h-6'/> :<LuPlusCircle className='w-6 h-6'/>}
  {header}
  </span>
  </div>
  <div
    className="collapse-content  peer-checked:border peer-checked:px-8 peer-checked:py-5  peer-checked:bg-white text-blue-400 ">
    {children}
  </div>
</div>
)
}

export default Collapse