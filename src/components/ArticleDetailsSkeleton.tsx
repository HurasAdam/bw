import React from 'react'
import Dropdown from './core/Dropdown';
import { IoCheckmarkCircle, IoPerson } from 'react-icons/io5';
import { FaCalendarCheck } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';

const ArticleDetailsSkeleton = ({children}) => {
  return (
    <div className="py-12 px-3 flex flex-col gap-10 relative">
      <div className="text-sm flex flex-col gap-3.5 text-slate-600 font-semibold">
        <div className="flex gap-1.5">
          {[{name:"Synergia"},{name:"e-Sekretariat"},{name:"abc"}].map((tag) => {
            return (
              <span className="bg-slate-200 py-0.5 px-1.5 rounded-md text-slate-200">
                {tag?.name}
              </span>
            );
          })}
        </div>
        <div className=" p-2.5 border bg-slate-200 rounded shadow-sm flex items-center justify-between">
          <span className="text-xl"></span>
          <div className="flex items-center gap-4  px-2">
            <span></span>
            <Dropdown />
          </div>
        </div>
      </div>
{children&&<div className='absolute top-[50%] left-[45%]'>{children}</div>}
      <div className="grid grid-cols-[6fr_2fr] gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5 break-words break-all">
            <span className="text-blue-700/70 text-sm font-semibold min-h-[20px] bg-slate-200 w-1/4">
            
            </span>
            <span className=" bg-slate-200 whitespace-pre-wrap border block p-3 py-4  rounded-md  min-h-[180px] shadow-sm text-slate-700/92">
              
            </span>
          </div>

          <div className="flex flex-col gap-1.5 break-words break-all ">
          <span className="text-blue-700/70 text-sm font-semibold min-h-[20px] bg-slate-200 w-1/4">
            
            </span>
            <span className="bg-slate-200  whitespace-pre-wrap whitespace-normal border block p-4 py-5 rounded-md min-h-[300px] shadow-sm text-slate-700/92">
            
            </span>
          </div>
        </div>
        <div className=" p-5 h-fit min-h-[300px] sticky top-[74px]  flex flex-col gap-2 ">
   
{
  [1,2,3,4].map((item)=>{
    return(
      <div className="flex flex-col bg-slate-200 shadow-md pb-2 px-3 py-1 rounded-md min-h-[50px]">
     
      </div>
    )
  })
}
        </div>
      </div>
    </div>
  )
}

export default ArticleDetailsSkeleton