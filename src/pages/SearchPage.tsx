import React, { useState } from "react";
import Drawer from "../components/core/Drawer";
import Table from "../components/core/Table";
import data from "../data";
import SearchBar from "../components/core/SearchBar";
import { Button } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { articlesApi } from "../services/articlesApi";
import Pagination from "../components/core/Pagination";

const SearchPage = () => {
  
  const [page, setPage] = useState<number>(1);

  const searchParams = {
    page: page.toString(),
  };

  const { data: articles, isLoading } = useQuery({
    queryFn: () => articlesApi.getAllArticles(searchParams),
    queryKey: ["articles", searchParams],
  });

  return (
    <div className="flex flex-col gap-4 p-5 ">
      <div className="sticky top-[61px] bg-white z-10 py-2">
        <SearchBar className="w-2/5 mx-auto " />
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
