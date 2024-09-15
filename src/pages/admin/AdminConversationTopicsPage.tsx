import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { tagsApi } from '../../services/tagsApi'
import { HiOutlineHashtag } from "react-icons/hi2";
import Button from '../../components/core/Button';
import { useAppContext } from '../../contexts/AppContext';
import toast from "react-hot-toast";
import { MdOutlinePhoneInTalk } from "react-icons/md";

import ToastVariant from '../../components/core/ToastVariant';
import ConversationTopicForm from '../../components/forms/ConversationTopicForm';
import { conversationsTopicsApi } from '../../services/ConversationsTopicsApi';

const AdminConversationTopicsPage = () => {



const {showContentModal,closeContentModal} = useAppContext();
const queryClient = useQueryClient();

const {data:topics} =useQuery({
        queryFn:()=>{
return conversationsTopicsApi.getAllTopics();
        },
        queryKey:["topics"]
    })


    const {mutate:createConversationTopicMutation}= useMutation({
      mutationFn:({formData})=>{
       return conversationsTopicsApi.createConversationTopic({formData})
      },
      onSuccess:({message})=>{
        closeContentModal();
        queryClient.invalidateQueries(["topics"]);
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
return   createConversationTopicMutation({formData})
      }
      else if (type ==="UPDATE"){
        return updateTagMutation({formData});
      }
    
    }




  return (
    <div className="flex flex-col gap-1 px-[21px] py-3 ">
      <div className="px-0.5 pt-2 mb-10 flex items-center gap-2 justify-between ">
        <h2 className='text-xl font-bold text-gray-600 flex items-center gap-2 '><MdOutlinePhoneInTalk className="text-blue-900"/>Lista tematów rozmów</h2>
       <div className=' mx-5 '>
       <Button 
       label="Dodaj" 
       className='rounded-md bg-blue-500 text-white font-semibold'
       onClick={()=>{
        showContentModal({
            isOpen:true,
            childrenComponent:(<ConversationTopicForm onSave={onSave}/>)
        })
       }}
       />
       </div>
      </div>

  
  <div className='flex flex-wrap gap-6   '>
    {topics?.map((topic)=>{
        return(
            <div 
            key={topic?._id}
            className=' hover:bg-blue-900/80 flex-wrap hover:transition-all cursor-pointer min-w-[85%]  max-w-[85%] mx-auto md:mx-0  sm:min-w-[45%]  sm:max-w-[45%]  md:min-w-[27%]  md:max-w-[27%] lg:min-w-[20%]  lg:max-w-[20%] xl:min-w-[15%]  xl:max-w-[15%]   px-4  py-3.5 text-center rounded-lg shadow-md border border-slate-200 bg-blue-900/90 text-white font-semibold'
            onClick={()=>{
                showContentModal({
                    isOpen:true,
                    childrenComponent:(<ConversationTopicForm topic={topic} onSave={onSave}/>)
                })
            }}
            >
             <div className='flex flex-col'>
             <span>{topic?.title}</span>
             <span className='text-xs text-slate-200 '>{topic?.description}</span>
             </div>
            </div>
        )
    })}
  </div>

    </div>
  )
}

export default AdminConversationTopicsPage;