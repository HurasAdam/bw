import React from "react";
import Drawer from "../components/core/Drawer";
import Table from "../components/core/Table";
import data from "../data";
import SearchBar from "../components/core/SearchBar";
import { Button } from "@headlessui/react";
import { NavLink } from "react-router-dom";

const SearchPage = () => {
  return (
    <div className="flex flex-col gap-10 p-5 ">
      <div className="flex justify-end">
        <NavLink
          className="bg-blue-600 px-1.5 py-2 rounded text-slate-100 font-semibold"
          to="/arcticle/new"
        >
          Nowy artykuł
        </NavLink>
      </div>
      <div className="sticky top-[61px] bg-white z-10 py-2">
        <SearchBar className="w-2/5 mx-auto " />
      </div>

      <div className="flex flex-col gap-2">
        <Table
          headers={data.articleHeaders}
          data={data.articles}
          showId={true}
          showAction={true}
        />
      </div>
    </div>
  );
};

export default SearchPage;
