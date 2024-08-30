import React from 'react';
import ArticleForm from '../components/forms/ArticleForm';
import { TbArticleFilled } from "react-icons/tb";

const CreateArticlePage = () => {
  return (
    <div className='bg-white min-h-[calc(100vh-6rem)]  px-14 pt-10 pb-14  '>
      <h2 className='flex items-center gap-x-1.5 text-2xl font-semibold text-slate-500'><TbArticleFilled className='w-8 h-8 text-blue-700'/> Dodaj artykuł</h2>
      <ArticleForm/>
    </div>
  )
}

export default CreateArticlePage