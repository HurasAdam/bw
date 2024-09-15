import React, { useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form';
import TextBox from '../core/TextBox';
import Button from '../core/Button';
import { MdOutlineAddCircle } from "react-icons/md";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import * as types from "../../types/index";
import { useAppContext } from '../../contexts/AppContext';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { tagsApi } from '../../services/tagsApi';
import ToastVariant from '../core/ToastVariant';
import { Description } from '@headlessui/react';
import { conversationsTopicsApi } from '../../services/ConversationsTopicsApi';
import Select from "react-select";
import { conversationsReportsApi } from '../../services/conversationReportsApi';

interface ILoginFormProps{
    onSave:(formData:types.ILoginFormData)=>void;
    errorMessage?:string;
    topic?:{
      title:string;
      description:string;
    }
}

const ConversationSummaryForm:React.FC<ILoginFormProps> = ({errorMessage,}) => {


const {data:topics} = useQuery({
  queryFn:()=>{
   return conversationsTopicsApi.getAllTopics();
  },
  queryKey:["topics"]
});


const {closeContentModal}=useAppContext();


    const {register, formState: { errors  },handleSubmit,  control,}=useForm({
        defaultValues:{
          
           topic:"",
        note:  "",
        },
        mode: "onChange",
      })



const {mutate:addConversationReportMutation} = useMutation({
  mutationFn:({formData})=>{
    return conversationsReportsApi.addConversationReport({formData})
  },
  onSuccess:({message})=>{
    closeContentModal();
    toast.custom((t) => (
      <ToastVariant t={t} message={message} variant="SUCCESS"/>
      ))
  }
})


const onSave = ({formData}) =>{
  addConversationReportMutation({formData})


}


const onSubmit = handleSubmit((data)=>{


    onSave({formData:data})
})


const topicOptions = useMemo(
  () =>
    topics?.map((topic) => ({
      value: topic._id,
      label: topic.title,
    })),
  [topics]
);



  return (
    <div className='w-full p-4 md:p-1 flex flex-col justify-center items-center min-h-full'>
    <form
      onSubmit={onSubmit}
      className='form-container w-full md:w-[480px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14'
    >
      <div className='flex items-center gap-2'>
    
      <p className='text-gray-600 text-xl font-semibold '>
    Odnotuj temat rezmowy
        </p>

      </div>
  
      <div className='flex flex-col gap-y-5 '>
 
      <div>
          <label className="block mb-1.5" htmlFor="tags">
            Wybierz temat
          </label>
          <Controller
            name="topic"
            control={control}
            rules={{ required: "Musisz wybrać przynajmniej jeden tag" }}
            render={({ field }) => (
              <Select
                {...field}
               
                options={topicOptions}
                classNamePrefix="react-select"
                placeholder="Wybierz Tag"
                onChange={(selectedOptions) => field.onChange(selectedOptions)}
              />
            )}
          />
          {errors.tags && (
            <span className="text-[11px] text-rose-500 font-semibold mt-0.5">
              {errors.tags.message}
            </span>
          )}
        </div>
   <div>
    <label htmlFor="">dodatkowy opis</label>
   <textarea
            
         {...register("note")}
            className="border rounded p-1 w-full h-20 resize-none mb-2"
            placeholder="Add a note..."
          />
   </div>

  
     
  
       <div className='flex justify-end gap-4 mt-1.5'>
       <Button
         onClick={closeContentModal}
          label='Anuluj'
          className='flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-slate-500  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        />
         <Button
          type='submit'
          label="Dodaj"
          className='flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        />
       </div>
      </div>
  {    errorMessage && <span className='block text-center font-semibold text-sm text-rose-600'>{errorMessage}</span>}

    </form>
  </div>
    )
  
}

export default ConversationSummaryForm;