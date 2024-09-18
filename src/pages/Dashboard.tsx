import React from "react";

import data from "../data";
import Table from "../components/core/Table";
import { useQuery } from "@tanstack/react-query";
import { articlesApi } from "../services/articlesApi";
import Pagination from "../components/core/Pagination";
import useArticleFilters from "../hooks/useArticleFilters";
import PieChart from "../components/core/PieChart";

const Dashboard:React.FC = () => {
  // const [page, setPage] = useState<number>(1);
  const {title,tags,page} = useArticleFilters();
  const searchParams = {
    page: page.toString(),
    title,tags
  };

  const { data: latestArticles,isLoading } = useQuery({
    queryFn: () => {
      return articlesApi.getAllArticles(searchParams);
    },
    queryKey: ["latestArticles", searchParams],
  });



  return (
    <div className="px-5  pb-10 pt-6  rounded-lg">
{/*  */}
      <div className="grid-rows lg:grid grid-cols-[6fr_3fr] gap-6 mb-4">
        <div className=" h-fit rounded bg-gray-50 flex flex-col ">
          <div className="grid grid-cols-3 gap-5">
<div className="shadow bg-blue-50 h-28 rounded-md px-5 py-4 flex flex-col justify-center items-center gap-3 font-inter">
  <span className="text-2xl font-bold text-indigo-600/90 ">44</span>
  <span className="text-blue-500/80 font-semibold text-sm ">Liczba wszystkich artykułow</span>
</div>
<div className="shadow bg-blue-50 h-28 rounded-md px-5 py-4 flex flex-col justify-center items-center gap-3 font-inter">
  <span className="text-2xl font-bold text-indigo-600/90">44</span>
  <span className="text-blue-500/80 font-semibold text-sm">Liczba wszystkich artykułow</span>
</div>
<div className="shadow bg-blue-50 h-28 rounded-md px-5 py-4 flex flex-col justify-center items-center gap-3 font-inter">
  <span className="text-2xl font-bold text-indigo-600/90">44</span>
  <span className="text-blue-500/80 font-semibold text-sm">Liczba wszystkich artykułow</span>
</div>

          </div>

          <div className="grid grid-rows gap-3.5 my-6">
            <h2 className="font-semibold font-inter text-[13px] text-gray-500">Ostatnio dodane artykuły</h2>

{latestArticles?.data?.map((article)=>{
  return(
<div className="border px-3 py-2.5 rounded-md">
  <div className="flex justify-between">
    <span>{article.title}</span>
    <span className="text-xs">{article?.updatedAt}</span>
  </div>
  {article.tags.map((tag)=>{
    return(
      <div>{tag?.name}</div>
    )
  })}
</div>

  )
})}



          </div>
        </div>






        <div className=" flex flex-col  rounded bg-gray-50 gap-3.5 ">
       <div className="flex flex-col items-center justify-start border h-fit p-1.5 rounded-md shadow">
        <h3 className="p-1 font-inter text-sm font-semibold text-gray-500">Najczęsciej odnotowywane tematy rozmów</h3>
       {/* <div className="border px-3 py-2.5 rounded">1</div>
       <div className="border px-3 py-2.5 rounded-md">1</div>
       <div className="border px-3 py-2.5 rounded-md">1</div>
       <div className="border px-3 py-2.5 rounded-md">1</div>
       <div className="border px-3 py-2.5 rounded-md">1</div>
       <div className="border px-3 py-2.5 rounded-md">1</div> */}
         <div className=" ">
     <PieChart/>
         </div>
  
       </div>

       {/*  */}
       <div className=" flex flex-col gap-3">
<h3 className="my-3 font-inter text-sm font-semibold text-gray-500">Najpopularniejsze artykuły</h3>
       <div className="border px-3 py-2.5 rounded-md">1</div>
       <div className="border px-3 py-2.5 rounded-md">1</div>
       <div className="border px-3 py-2.5 rounded-md">1</div>
       <div className="border px-3 py-2.5 rounded-md">1</div>
       <div className="border px-3 py-2.5 rounded-md">1</div>

       </div>
{/*  */}


        </div>
     
      </div>
{/*  */}

    </div>
  );
};

export default Dashboard;
