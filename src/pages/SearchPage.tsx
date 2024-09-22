import React, { useEffect, useState } from "react";
import Drawer from "../components/core/Drawer";
import Table from "../components/core/Table";
import data from "../data";
import SearchBar from "../components/core/SearchBar";
import { Button } from "@headlessui/react";
import { NavLink, useSearchParams } from "react-router-dom";
import { SiPowerpages } from "react-icons/si";
import { useQuery } from "@tanstack/react-query";
import { articlesApi } from "../services/articlesApi";
import Pagination from "../components/core/Pagination";
import { tagsApi } from "../services/tagsApi";
import useArticleFilters from "../hooks/useArticleFilters";
import { useDebounce } from "../hooks/useDebounce";
import CONSTANTS from "../constants";
import { userApi } from "../services/userApi";

const SearchPage = () => {
  
const {title,tags,author,setFilters,page,verified} = useArticleFilters();

const {debouncedValue} = useDebounce({value:title,delay:CONSTANTS.DEBOUNCE_DELAY_MS})

console.log(debouncedValue);

  const queryParams={
    page,title:debouncedValue,tags,author,verified
  }


  const { data: articles, isLoading } = useQuery({
    queryFn: () => {
      return articlesApi.getAllArticles(queryParams)
    },
    queryKey: ["articles", queryParams],
  });



  const { data: tagsList,refetch } = useQuery({
    queryFn: () => {
      return tagsApi.getAllTags();
    },
    queryKey: ["tags"],
    enabled:false,
    refetchOnWindowFocus: false,
  });


  const { data: authorsList,refetch:fetchUsers } = useQuery({
    queryFn: () => {
      return userApi.getUsers();
    },
    queryKey: ["authors"],
    enabled:false,
    refetchOnWindowFocus: false,
  });


  return (
    <div className="flex flex-col gap-1 px-[21px] py-3  ">
      
      <h2 className="text-xl font-bold text-gray-600 px-0.5 pt-2 mb-3 flex items-center gap-2"><SiPowerpages className="text-blue-900"/>Baza Arykułów</h2>
      <div className="bg-sky-50 w-full px-2 py-2 text-sm rounded-md">
        <span className="font-semibold text-slate-500">Znaleziono<span className="mx-2 text-blue-800 font-bold">{articles?.pagination?.total}</span>Artykułów</span>
      </div>


      <div className="flex gap-5 rounded-md">
   
  



      {isLoading ? (
    <div className=" min-h-[700px] flex justify-center items-center border flex-col bg-slate-50 rounded-md w-full">
         <span className="loading loading-dots loading-lg text-blue-600 scale-[1.5]"></span>
         <span className="font-bold text-lg text-slate-400">Pobierane artykułow</span>
    </div>
      ) : (
        <div className="flex flex-col gap-2 w-full  ">

          <Table
            headers={data.articleHeaders}
            data={articles?.data}
            
            showAction={true}
          />

<div className="flex justify-end">
{ articles?.pagination.pages >1  &&   <Pagination
        currentPage={articles?.pagination.page || 1}
        pages={articles?.pagination.pages || 1}
     
      />}
</div>
        </div>
      )}

<div className="sticky top-[61px]  z-10 w-[380px] px-6 pt-3 pb-4 border border-slate-300/70  rounded max-h-fit min-h-[350px] bg-white">
<h3 className="mb-2.5 text-xl font-semibold font-inter text-gray-800/80">Filtry</h3>
        <SearchBar className=" flex-col gap-2.5"  refetch={refetch} tagsList={tagsList} authorsList={authorsList} fetchUsers={fetchUsers}/>
      </div>



      </div>

    </div>
  );
};

export default SearchPage;
