import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { tagsApi } from '../../services/tagsApi'
import { HiOutlineHashtag } from "react-icons/hi2";
import Button from '../../components/core/Button';
import { useAppContext } from '../../contexts/AppContext';
import toast from "react-hot-toast";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

import ToastVariant from '../../components/core/ToastVariant';
import ConversationTopicForm from '../../components/forms/ConversationTopicForm';
import { conversationsTopicsApi } from '../../services/ConversationsTopicsApi';

const AdminConversationTopicsPage = () => {



const {showContentModal,closeContentModal,closeModal,showModal} = useAppContext();
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



    const {mutate:deleteConversationTopicMutation} = useMutation({
      mutationFn:({formData})=>{
        return conversationsTopicsApi.deleteConversationTopic({formData})
      },
      onSuccess:({message})=>{
        queryClient.invalidateQueries(["topics"]);
        closeModal();
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
      }else{
        if(type ==="DELETE"){
          return deleteConversationTopicMutation({formData})
        }
      }
    
    }




  return (
    <div className="flex flex-col gap-1 py-3 ">
      <div className="px-0.5 pt-2 mb-10 flex items-center gap-2 justify-between ">
        <h2 className='text-xl font-bold text-gray-600 flex items-center gap-2 '><MdOutlinePhoneInTalk className="text-blue-900"/>Lista tematów rozmów</h2>
       <div className=' mx-5 '>
       <Button 
       label="Dodaj nowy temat +" 
       className='rounded-md bg-blue-500 text-white font-semibold py-2'
       onClick={()=>{
        showContentModal({
            isOpen:true,
            childrenComponent:(<ConversationTopicForm onSave={onSave}/>)
        })
       }}
       />
       </div>
      </div>

  
  <div className='flex  flex-col gap-6   '>
    {topics?.map((topic)=>{
        return(
            <div 
            key={topic?._id}
            className=' 2xl:w-[45%] flex items-center  rounded-xl py-3 px-4 min-h-[58px] shadow-sm border border-gray-400/80'
       
            >
         
             <span className='flex-1 font-inter'>{topic?.title}</span>
             <span className='flex-1 text-[13px] text-gray-500 '>{topic?.description}</span>
             <div className='flex-1 flex gap-3 justify-end  '>
              <button
              
              onClick={()=>{
                showContentModal({
                    isOpen:true,
                    childrenComponent:(<ConversationTopicForm topic={topic} onSave={onSave}/>)
                })
            }}
              ><MdEdit/></button>
              <button
              
              onClick={()=>showModal({
                isOpen:true,
                header:"Usuń temat rozmowy",
                description:"Czy na pewno chce usunąć ten ten temat rozmowy?",
                type:"DANGER",
                triggerFn:()=>{
                  onSave({formData:topic._id , type:"DELETE"})
                }
              })}
              ><MdDelete/></button>
              </div>
             
            </div>
        )
    })}
  </div>

    </div>
  )
}

export default AdminConversationTopicsPage;