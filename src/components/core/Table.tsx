import React from 'react';
import TableRow from './TableRow';
import TableHeader from './TableHeader';


interface TableProps {
  headers: string[];
  data: {
    id: number;
    firstName: string;
    lastName: string;
    internalNumber: string;
    email: string;
  }[];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div className='w-full mx-auto bg-white px-2 md:px-4 pt-4 pb-4 shadow-md rounded'>
      <table className='w-full'>
        <TableHeader headers={headers} />
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;