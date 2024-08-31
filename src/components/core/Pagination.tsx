import React from "react";

export type Props = {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ page, pages, onPageChange }: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center  py-6">
      <ul className="flex  border-slate-300">
        {pageNumbers.map((number) => {
          const active = page === number;
          return (
            <li
              className={`px-[10px] rounded-md mx-[1.5px] border border-blue-200 text-slate-700  py-[2px] ${
                active ? "bg-blue-500 border-blue-500 text-white" : ""
              }`}
            >
              <button onClick={() => onPageChange(number)}>{number}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
