import React, { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import data from "../data";
import Table from "../components/core/Table";
import { useQuery } from "@tanstack/react-query";
import { articlesApi } from "../services/articlesApi";
import Pagination from "../components/core/Pagination";
import useArticleFilters from "../hooks/useArticleFilters";

const Dashboard = () => {
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

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500"></p>
        </div>
        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500"></p>
        </div>
        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500"></p>
        </div>
      </div>
{isLoading ? (
      <div className=" min-h-[700px] flex justify-center items-center border flex-col bg-slate-50 rounded-md">
      <span className="loading loading-dots loading-lg text-blue-600 scale-[1.5]"></span>
      <span className="font-bold text-lg text-slate-400">Pobierane artykułow</span>
  </div>
):( <div className="flex flex-col gap-2">
  <Table
    headers={data.articleHeaders}
    data={latestArticles?.data}
    showId={true}
    showAction={true}
  />
</div>)}
     
      <Pagination
        page={latestArticles?.pagination.page || 1}
        pages={latestArticles?.pagination.pages || 1}
        onPageChange={(page) => setPage(page)}
      />
    </div>
  );
};

export default Dashboard;
