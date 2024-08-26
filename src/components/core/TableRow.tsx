import React from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdKeyboardDoubleArrowUp } from 'react-icons/md';

const ICONS = {
  high: <MdKeyboardDoubleArrowUp />,
  medium: <MdKeyboardArrowUp />,
  low: <MdKeyboardArrowDown />,
};

interface TableRowProps {
  data: {
    id: number;
    firstName: string;
    lastName: string;
    internalNumber: string;
    email: string;
  };
}

const TableRow: React.FC<TableRowProps> = ({ data }) => (
  <tr className='border-b  border-gray-300 text-gray-600 hover:bg-gray-300/10'>
    <td className='py-2'>{data.firstName}</td>
    <td className='py-2'>{data.lastName}</td>
    <td className='py-2'>{data.internalNumber}</td>
    <td className='py-2'>{data.email}</td>
    <td className='py-2'> {/* Optional additional data, e.g., department */} </td>
  </tr>
);

export default TableRow;