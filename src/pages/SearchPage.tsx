import React, { useEffect, useState } from "react";
import Drawer from "../components/core/Drawer";
import Table from "../components/core/Table";
import data from "../data";
import SearchBar from "../components/core/SearchBar";
import { Button } from "@headlessui/react";
import { NavLink, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { articlesApi } from "../services/articlesApi";
import Pagination from "../components/core/Pagination";
import { tagsApi } from "../services/tagsApi";
import useArticleFilters from "../hooks/useArticleFilters";
import { useDebounce } from "../hooks/useDebounce";
import CONSTANTS from "../constants";

const SearchPage = () => {
  
const {title,tags,setFilters,page} = useArticleFilters();

const {debouncedValue} = useDebounce({value:title,delay:CONSTANTS.DEBOUNCE_DELAY_MS})

console.log(debouncedValue);

  const queryParams={
    page,title:debouncedValue,tags
  }
  // const [title, setTitle] = useState('');
  // const [debouncedTitle, setDebouncedTitle] = useState('');


// const queryParams = {
//   title,
// tags
// }

// const handleTitleChange = (e) =>{
//   setSearchParams((prev)=>{
//     prev.set("title",e.target.value)
//   })
// }

// const handleTagChange = (selected) =>{
//   setSearchParams((prev)=>{
// prev.set("tags",selected)
//   })
// }


// useEffect(()=>{

// const handler = setTimeout(()=>{
//   setDebouncedTitle(title)
// },350)

// return ()=>{
//   clearTimeout(handler)
// }


// },[title])

  // const searchParams = {
  //   page: page.toString(),
  //   title:debouncedTitle,
  //   tags
  // };

  const { data: articles, isLoading } = useQuery({
    queryFn: () => {
      return articlesApi.getAllArticles(queryParams)
    },
    queryKey: ["articles", queryParams],
  });

// useEffect(()=>{
// setPage(1)
// },[title,tags])

  const { data: tagsList,refetch } = useQuery({
    queryFn: () => {
      return tagsApi.getAllTags();
    },
    queryKey: ["tags"],
    enabled:false,
  });



  return (
    <div className="flex flex-col gap-1 px-[21px] py-3 ">
      <h2 className="text-2xl font-bold text-blue-900 px-0.5 pt-2 mb-3">Baza Arykułów</h2>
      <div className="bg-sky-50 w-full px-2 py-2 text-sm rounded-md">
        <span className="font-semibold text-slate-500">Znaleziono<span className="mx-2 text-blue-800 font-bold">{articles?.pagination?.total}</span>Artykułów</span>
      </div>
      <div className="sticky top-[61px] bg-white z-10 ">
        <SearchBar className="w-2/5 mx-auto "  refetch={refetch} tagsList={tagsList}/>
      </div>

      {isLoading ? (
    <div className=" min-h-[700px] flex justify-center items-center border flex-col bg-slate-50 rounded-md">
         <span className="loading loading-dots loading-lg text-blue-600 scale-[1.5]"></span>
         <span className="font-bold text-lg text-slate-400">Pobierane artykułow</span>
    </div>
      ) : (
        <div className="flex flex-col gap-2">
          <Table
            headers={data.articleHeaders}
            data={articles?.data}
            showId={true}
            showAction={true}
          />
        </div>
      )}
 { articles?.pagination.pages >1  &&   <Pagination
        currentPage={articles?.pagination.page || 1}
        pages={articles?.pagination.pages || 1}
     
      />}
    </div>
  );
};

export default SearchPage;
