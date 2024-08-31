import React from 'react';
import ArticleForm from '../components/forms/ArticleForm';
import { TbArticleFilled } from "react-icons/tb";
import { useQuery } from '@tanstack/react-query';
import { tagsApi } from '../services/tagsApi';

const CreateArticlePage = () => {



const {data:tags}= useQuery({
  queryFn:()=>{
    return tagsApi.getAllTags()
  },
  queryKey:["tags"]
});









  return (
    <div className='bg-white min-h-[calc(100vh-6rem)]  px-14 pt-10 pb-14 rounded-lg '>
      <h2 className='flex items-center gap-x-1.5 text-2xl font-semibold text-slate-500'><TbArticleFilled className='w-8 h-8 text-blue-700'/> Dodaj artykuł</h2>
      <ArticleForm tags={tags}/>
    </div>
  )
}

export default CreateArticlePage