import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { tagsApi } from '../../services/tagsApi'
import { HiOutlineHashtag } from "react-icons/hi2";
import Button from '../../components/core/Button';
import { useAppContext } from '../../contexts/AppContext';
import TagForm from '../../components/forms/TagForm';

const AdminTagsPage = () => {
const {showContentModal} = useAppContext();
    const {data:tags} =useQuery({
        queryFn:()=>{
return tagsApi.getAllTags()
        },
        queryKey:["tags"]
    })


  return (
    <div className="flex flex-col gap-1 px-[21px] py-3 ">
      <div className="px-0.5 pt-2 mb-10 flex items-center gap-2 justify-between ">
        <h2 className='text-xl font-bold text-gray-600 flex items-center gap-2 '><HiOutlineHashtag className="text-blue-900"/>Lista Tagów</h2>
       <div className=' mx-5 '>
       <Button 
       label="Dodaj" 
       className='rounded-md bg-blue-500 text-white font-semibold'
       onClick={()=>{
        showContentModal({
            isOpen:true,
            childrenComponent:(<TagForm/>)
        })
       }}
       />
       </div>
      </div>

  
  <div className='flex flex-wrap gap-6'>
    {tags?.map((tag)=>{
        return(
            <div 
            key={tag?._id}
            className=' hover:bg-blue-900/80 hover:transition-all cursor-pointer min-w-[300px] max-w-[200px] px-4 py-5 text-center rounded-lg shadow-md border border-slate-200 bg-blue-900/90 text-white font-semibold'
            >{tag?.name}</div>
        )
    })}
  </div>

    </div>
  )
}

export default AdminTagsPage