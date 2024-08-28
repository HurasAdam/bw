import React from 'react';
import TableRow from './TableRow';
import TableHeader from './TableHeader';

interface TableProps {
  headers: string[];
  data: {
    id: number;
    internalNumber: string;
    firstName: string;
    lastName: string;
    department: string;
    email: string;
  }[];
  showId?: boolean; // Prop is optional and controls the visibility of the 'ID' column
}

const Table: React.FC<TableProps> = ({ headers, data, showId = false, showTextarea }) => {
  // Conditionally include 'ID' in the headers if showId is true
  const tableHeaders = showId ? ['ID', ...headers] : headers;

  return (
    <div className='overflow-x-auto'>
      <table className='table table-sm'>
        <TableHeader headers={tableHeaders} showId={showId} />
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id} data={item} showId={showId} showTextarea={showTextarea} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
