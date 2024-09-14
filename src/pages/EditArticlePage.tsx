import React from 'react'
import ArticleForm from '../components/forms/ArticleForm'

import { FiEdit } from "react-icons/fi";
import { useMutation, useQuery } from '@tanstack/react-query'
import { articlesApi } from '../services/articlesApi'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppContext } from '../contexts/AppContext';
import { tagsApi } from '../services/tagsApi';

const EditArticlePage:React.FC = () => {
  const { showToast, isLoggedIn } = useAppContext();
  const navigate = useNavigate();
  const {id} = useParams();
  const { data: article,isLoading,isFetching } = useQuery({
    queryFn: () => {
      return articlesApi.getArticle({ id });
    },
    queryKey:["article",id],
    onSuccess: () => {
   
    },
    refetchOnWindowFocus: false,
  });


  const { data: tags } = useQuery({
    queryFn: () => {
      return tagsApi.getAllTags();
    },
    queryKey: ["tags"],
    refetchOnWindowFocus: false,
  });




  const { mutate } = useMutation({
    mutationFn: ({ _id,title, tags, employeeDescription, clientDescription }) => {
      return articlesApi.updateArticle({
        _id,
        title,
        tags,
        employeeDescription,
        clientDescription,
      });
    },
    onSuccess: () => {
      showToast({ message: "Artukuł został zaktualizowany", type: "SUCCESS" });
      navigate("/articles");
    },
  });




  const onSave = (formData) => {
    mutate(formData);
  };

  return (
    <div className="bg-white min-h-[calc(100vh-6rem)]  px-16 pt-10 pb-14 rounded-lg ">
      <h2 className="flex items-center gap-x-1.5 text-2xl font-semibold text-slate-500 jus">
        <FiEdit className="w-8 h-8 text-blue-700" /> Edytuj Artykuł 
      </h2>
     {article&&<ArticleForm tags={tags} article={article } onSave={onSave} />} 
    </div>
  )
}

export default EditArticlePage