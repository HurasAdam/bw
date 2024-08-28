import React from 'react';

interface TableHeaderProps {
  headers: string[];
  showId: boolean;
}

const TableHeader: React.FC<TableHeaderProps> = ({ headers, showId }) => (
  <thead>
    <tr>
      {showId && <th>ID</th>}
      {headers.map((header, index) => (
        <th key={index}>{header}</th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;
