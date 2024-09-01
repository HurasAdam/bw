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
    <div>
      <Table
        headers={data.articleHeaders}
        data={favourites}
        showId={true}
        showAction={true}
      />
    </div>
  );
};

export default FavouritesPage;
