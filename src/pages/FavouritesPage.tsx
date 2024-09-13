import { useQuery } from "@tanstack/react-query";
import React from "react";
import { articlesApi } from "../services/articlesApi";
import Table from "../components/core/Table";
import { AiFillStar } from "react-icons/ai";
import data from "../data";

const FavouritesPage: React.FC = () => {
  const { data: favourites } = useQuery({
    queryFn: () => {
      return articlesApi.getFavouriteArticles();
    },
  });



  return (
    <div className="px-[21px] py-3 ">
      <h2 className="text-xl font-bold text-blue-900 px-0.5 pt-2 mb-5 flex items-center gap-1.5"><AiFillStar className="w-6 h-6 text-amber-600/70"/>Ulubione artykuły</h2>
      <Table
        headers={data.articleHeaders}
        data={favourites?.data}
        showId={true}
        showAction={true}
      />
    </div>
  );
};

export default FavouritesPage;
