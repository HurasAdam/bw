import React from "react";

interface TableHeaderProps {
  headers: string[];
  showId: boolean;
}

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => (
  <thead className="bg-blue-50  border-indigo-100 min-w-full ">
    <tr className="w-full">
      {headers.map((header, index) => (
        <th key={index}>{header}</th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;
