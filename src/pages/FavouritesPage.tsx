import { useQuery } from "@tanstack/react-query";
import React from "react";
import { articlesApi } from "../services/articlesApi";
import Table from "../components/core/Table";
import data from "../data";

const FavouritesPage: React.FC = () => {
  const { data: favourites } = useQuery({
    queryFn: () => {
      return articlesApi.getFavouriteArticles();
    },
  });

  console.log(favourites);

  return (
    <div className="px-[21px] py-3 ">
      <h2 className="text-xl font-bold text-blue-900 px-0.5 pt-2 mb-5 ">Ulubione artykuły</h2>
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
