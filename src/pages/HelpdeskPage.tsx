import React from 'react';
import DataTable from '../components/core/Table';
import Table from '../components/core/Table';

const headers = ['First Name', 'Last Name', 'Internal Number', 'Email'];

const data = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    internalNumber: '101',
    email: 'john.doe@example.com',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    internalNumber: '102',
    email: 'jane.smith@example.com',
  },
  {
    id: 3,
    firstName: 'Michael',
    lastName: 'Johnson',
    internalNumber: '103',
    email: 'michael.johnson@example.com',
  },
  {
    id: 4,
    firstName: 'Emily',
    lastName: 'Davis',
    internalNumber: '104',
    email: 'emily.davis@example.com',
  },
  {
    id: 5,
    firstName: 'William',
    lastName: 'Brown',
    internalNumber: '105',
    email: 'william.brown@example.com',
  },
];

const HelpdeskPage: React.FC = () => {
  return (
    <div className='text-2xl h-fit'>
      <div>
        <Table headers={headers} data={data} />
      </div>
    </div>
  );
};

export default HelpdeskPage;