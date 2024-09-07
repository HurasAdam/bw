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
  
const {title,tags,} = useArticleFilters();

const {debouncedValue} = useDebounce({value:title,delay:CONSTANTS.DEBOUNCE_DELAY_MS})

console.log(debouncedValue);
  const [page, setPage] = useState<number>(1);
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



  const { data: tagsList,refetch } = useQuery({
    queryFn: () => {
      return tagsApi.getAllTags();
    },
    queryKey: ["tags"],
    enabled:false,
  });


  return (
    <div className="flex flex-col gap-4 p-5 ">
      <div className="sticky top-[61px] bg-white z-10 py-2">
        <SearchBar className="w-2/5 mx-auto "  refetch={refetch} tagsList={tagsList}/>
      </div>

      {isLoading ? (
        <span>Loading...</span>
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
        page={articles?.pagination.page || 1}
        pages={articles?.pagination.pages || 1}
        onPageChange={(page) => setPage(page)}
      />}
    </div>
  );
};

export default SearchPage;
