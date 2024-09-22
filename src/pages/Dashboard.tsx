import React from "react";

import data from "../data";
import Table from "../components/core/Table";
import { BsClipboardDataFill } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import { articlesApi } from "../services/articlesApi";
import { IoCheckbox } from "react-icons/io5";
import { AiFillEye } from "react-icons/ai";
import { MdPending } from "react-icons/md";
import Pagination from "../components/core/Pagination";
import useArticleFilters from "../hooks/useArticleFilters";
import PieChart from "../components/core/PieChart";
import { formatDate } from "../utils";

const Dashboard:React.FC = () => {
  // const [page, setPage] = useState<number>(1);
  const {title,tags,page,author} = useArticleFilters();
  const searchParams = {
    page: page.toString(),
    title,tags,author
  };

  const { data: latestArticles,isLoading } = useQuery({
    queryFn: () => {
      return articlesApi.getAllArticles(searchParams);
    },
    queryKey: ["latestArticles", searchParams],
  });



  return (
    <div className="px-5   pt-6  rounded-lg">
{/*  */}
      <div className="grid-rows lg:grid grid-cols-[6fr_3fr] gap-6  ">
        <div className=" h-fit rounded flex flex-col ">
          <div className="grid grid-cols-3 gap-5 p-1.5">
          <div className="shadow bg-white border border-slate-200 h-28 rounded-md px-5 py-4 flex flex-col justify-center items-center gap-3 font-inter relative">
  <span className="text-[27px] font-bold text-indigo-800 ">44</span>
  <span className="text-slate-500 font-semibold text-sm ">Liczba wszystkich artykułow</span>
  <span className="absolute top-[-16px] left-2.5 border w-14 h-14 bg-blue-800/90 rounded-lg text-white flex items-center justify-center">
    <BsClipboardDataFill className="text-[20px]" />
  </span>
</div>

<div className="shadow bg-white border border-slate-200 h-28 rounded-md px-5 py-4 flex flex-col justify-center items-center gap-3 font-inter relative">
  <span className="text-[27px] font-bold text-green-700/80  ">44</span>
  <span className="text-slate-500 font-semibold text-sm ">Liczba wszystkich artykułow</span>
  <span className="absolute top-[-16px] left-2.5 border w-14 h-14 bg-green-800/80 rounded-lg text-white flex items-center justify-center">
    <IoCheckbox className="text-[20px]"/>
  </span>
</div>

<div className="shadow bg-white border border-slate-200 h-28 rounded-md px-5 py-4 flex flex-col justify-center items-center gap-3 font-inter relative">
  <span className="text-[27px] font-bold text-amber-700/80 ">44</span>
  <span className="text-slate-500 font-semibold text-sm ">Liczba wszystkich artykułow</span>
  <span className="absolute top-[-16px] left-2.5 border w-14 h-14 bg-amber-700/80 rounded-lg text-white flex items-center justify-center">
    <MdPending className="text-[20px]"/>
  </span>
</div>

          </div>

          <div className="grid grid-rows gap-2 my-12   px-2.5 py-3 rounded-md">
            <h2 className="font-semibold font-inter text-[13px] mb-1.5  text-gray-500">Ostatnio dodane artykuły</h2>

{latestArticles?.data?.map((article)=>{
  return(
<div className=" px-[18px] pb-4 pt-3 rounded-md flex gap-3.5 flex-col  shadow   bg-white">
  <div className="flex justify-start ">
  <div className="text-xs text-slate-600">{formatDate(article?.createdAt)}</div>


  </div>
  <div className="flex justify-between  ">


  <div className="flex-1 flex"><span className="text-sm font-semibold text-gray-500 ">{article?.title}</span></div>
  <div className="flex gap-2 flex-wrap  w-full justify-start max-w-[50%] ">
  {article.tags.map((tag)=>{
    return(
      <div className="bg-blue-400 rounded text-xs font-semibold text-white px-1.5 py-0.5 flex items-center">{tag?.name}</div>
    )
  })}
  </div>
<div className=""><AiFillEye className="text-slate-600/90 text-xl cursor-pointer hover:text-blue-300 transition-all"/></div>
  </div>
 
</div>

  )
})}



          </div>
        </div>






        <div className=" flex flex-col  rounded bg-gray-50 gap-3.5 ">
       <div className="flex flex-col items-center justify-start border h-fit px-0 py-2 rounded-md shadow bg-white">
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
       <div className=" flex flex-col gap-2.5 bg-white px-5 py-5 shadow-md rounded-lg">
<h3 className="my-3 font-inter text-sm font-semibold text-gray-500">Najpopularniejsze artykuły</h3>
       <div className="border border-slate-100 px-3 py-2.5 rounded-md flex justify-between items-center shadow-md bg-slate-50">
        <span>Jak dodać zastępstwo Jak dodać zastępstwo ?</span>
        <span ><AiFillEye className="text-xl text-gray-500"/></span>
       </div>
 
       <div className="border px-3 py-2.5 rounded-md flex justify-between items-center">
        <span>Jak dodać zastępstwo Jak dodać zastępstwo ?</span>
        <span ><AiFillEye className="text-xl text-gray-500"/></span>
       </div>

       <div className="border px-3 py-2.5 rounded-md flex justify-between items-center">
        <span>Jak dodać zastępstwo Jak dodać zastępstwo ?</span>
        <span ><AiFillEye className="text-xl text-gray-500"/></span>
       </div>

       <div className="border px-3 py-2.5 rounded-md flex justify-between items-center">
        <span>Jak dodać zastępstwo Jak dodać zastępstwo ?</span>
        <span ><AiFillEye className="text-xl text-gray-500"/></span>
       </div>

       

       </div>
{/*  */}


        </div>
     
      </div>
{/*  */}

    </div>
  );
};

export default Dashboard;
