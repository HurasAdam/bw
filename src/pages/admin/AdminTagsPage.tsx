import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { tagsApi } from '../../services/tagsApi'
import { HiOutlineHashtag } from "react-icons/hi2";
import Button from '../../components/core/Button';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useAppContext } from '../../contexts/AppContext';
import toast from "react-hot-toast";
import TagForm from '../../components/forms/TagForm';
import ToastVariant from '../../components/core/ToastVariant';

const AdminTagsPage = () => {



const {showContentModal,closeContentModal} = useAppContext();
const queryClient = useQueryClient();

const {data:tags} =useQuery({
        queryFn:()=>{
return tagsApi.getAllTags()
        },
        queryKey:["tags"]
    })


    const {mutate:createTagMutation}= useMutation({
      mutationFn:({formData})=>{
       return tagsApi.createTag({formData})
      },
      onSuccess:({message})=>{
        closeContentModal();
        queryClient.invalidateQueries(["tags"]);
        toast.custom((t) => (
          <ToastVariant t={t} message={message} variant="SUCCESS"/>
          ))
      }
    })
    
    
    const {mutate:updateTagMutation}= useMutation({
      mutationFn:({formData})=>{
       return tagsApi.updateTag({formData})
      },
      onSuccess:({message})=>{
        closeContentModal();
        queryClient.invalidateQueries(["tags"]);
        toast.custom((t) => (
          <ToastVariant t={t} message={message} variant="SUCCESS"/>
          ))
      }
    })
    
    
    const onSave = ({formData,type}) =>{
      if(type==="CREATE"){
return   createTagMutation({formData})
      }
      else if (type ==="UPDATE"){
        return updateTagMutation({formData});
      }
    
    }




  return (
    <div className="flex flex-col gap-1  py-3 ">
      <div className="px-0.5 pt-2 mb-10 flex items-center gap-2 justify-between ">
        <h2 className='text-xl font-bold text-gray-600 flex items-center gap-2 '><HiOutlineHashtag className="text-blue-900"/>Lista Tagów</h2>
       <div className=' mx-5 '>
       <Button 
       label="Dodaj nowy tag +" 
       className='rounded-lg bg-blue-600 text-white font-semibold py-2'
       onClick={()=>{
        showContentModal({
            isOpen:true,
            childrenComponent:(<TagForm onSave={onSave}/>)
        })
       }}
       />
       </div>
      </div>

  
  <div className='flex flex-col gap-4   '>
    {tags?.map((tag)=>{
        return(
            <div 
            key={tag?._id}
            className='border 2xl:w-[45%] px-4 py-2.5  border-gray-400/70 shadow-xs rounded-xl'
       
            >
             <div className='flex justify-between'>
             <span className='font-semibold text-gray-700/90'>{tag?.name}</span>
<div className='flex items-center gap-4'>
<MdEdit 
           className='w-5 h-5 cursor-pointer text-gray-600/90 hover:text-blue-300'
           onClick={()=>{
            showContentModal({
                isOpen:true,
                childrenComponent:(<TagForm tag={tag} onSave={onSave}/>)
            })
        }}
           />

<MdDelete className='text-rose-600/60 cursor-pointer hover:text-rose-500'/>

</div>

             </div>
            </div>
        )
    })}
  </div>

    </div>
  )
}

export default AdminTagsPage