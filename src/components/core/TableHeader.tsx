import React from 'react';

interface TableHeaderProps {
  headers: string[]; 
}

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => {
  return (
    <thead className="border-b border-gray-300 ">
      <tr className="text-slate-600 text-left">
        {headers.map((header, index) => (
          <th
            key={index}
            className={`text-base text-sm py-2.5 ${index === headers.length - 1 ? 'hidden md:block' : ''}`}
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;