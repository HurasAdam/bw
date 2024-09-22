import React from "react";
import useArticleFilters from "../../hooks/useArticleFilters";

export type Props = {
  currentPage: number;
  pages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, pages, onPageChange }: Props) => {
  const pageNumbers = [];

  const {page,setFilters}= useArticleFilters();
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center  pb-5 w-full ">
      <ul className="flex  border-slate-300">
        {pageNumbers.map((number) => {
          const active = currentPage === number;
          return (
            <li
              className={` rounded-md mx-[1.5px] border text-slate-700 w-[30px] h-[30px] flex items-center justify-center transition-all hover:border-blue-800 ${
                active
                  ? "bg-blue-500 border-blue-500 text-white border-transparent"
                  : ""
              }`}
            >
              <button
                className="w-full h-full"
                onClick={() => setFilters({page:number})}
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
