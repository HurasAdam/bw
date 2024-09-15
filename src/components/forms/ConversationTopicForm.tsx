import React from 'react'
import { useForm } from 'react-hook-form';
import TextBox from '../core/TextBox';
import Button from '../core/Button';
import { MdOutlineAddCircle } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import * as types from "../../types/index";
import { useAppContext } from '../../contexts/AppContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { tagsApi } from '../../services/tagsApi';
import ToastVariant from '../core/ToastVariant';
import { Description } from '@headlessui/react';

interface ILoginFormProps{
    onSave:(formData:types.ILoginFormData)=>void;
    errorMessage?:string;
    topic?:{
      title:string;
      description:string;
    }
}

const ConversationTopicForm:React.FC<ILoginFormProps> = ({onSave,errorMessage,topic}) => {

const {closeContentModal}=useAppContext();


    const {register, formState: { errors  },handleSubmit}=useForm({
        defaultValues:{
          
           title: topic ? topic?.title : "",
        description: topic? topic?.description : "",
        },
        mode: "onChange",
      })




const onSubmit = handleSubmit((data)=>{
  if(topic){
    
  return  onSave({formData:{...data, topicId:topic?._id},type:"UPDATE"})
  }

    onSave({formData:data,type:"CREATE"})
})


  return (
    <div className='w-full p-4 md:p-1 flex flex-col justify-center items-center min-h-full'>
    <form
      onSubmit={onSubmit}
      className='form-container w-full md:w-[440px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14'
    >
      <div className='flex items-center gap-2'>
      {topic? <FaEdit className='w-6 h-6'/> :<MdOutlineAddCircle className='w-6 h-6'/>}
      <p className='text-gray-600 text-xl font-semibold '>
    {topic ? `Edytuj temat: ${topic?.title}`:"Dodaj temat rozmowy"}
        </p>

      </div>
  
      <div className='flex flex-col gap-y-5 '>
 
            <TextBox
          placeholder='Promocja ucznia'
          type='text'
          name='title'
          label='Tytuł tematu'
           className='w-full rounded-lg'
          register={register("title", {
            required: "nazwa jest wymagana",
          })}
          error={errors.title ? errors.title.message : ""}
        />
                 <TextBox
          placeholder='Jak wykonać promocję ucznia, opis wszystkich kroków'
          type='text'
          name='description'
          label='Skrótowy opis'
           className='w-full rounded-lg'
          register={register("description", {
            required: {
              value: true,
              message: "Opis jest wymagany",
            },
            minLength: {
              value: 6,
              message: "Password length must be at least 6 characters",
            },
          })}
          error={errors.description ? errors.description.message : ""}
        />

  
     
  
       <div className='flex justify-end gap-4 mt-1.5'>
       <Button
         onClick={closeContentModal}
          label='Anuluj'
          className='flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-slate-500  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        />
         <Button
          type='submit'
          label={topic ? "Zapisz":"Dodaj"}
          className='flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        />
       </div>
      </div>
  {    errorMessage && <span className='block text-center font-semibold text-sm text-rose-600'>{errorMessage}</span>}

    </form>
  </div>
    )
  
}

export default ConversationTopicForm;