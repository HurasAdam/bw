import React from 'react';
import DataTable from '../components/core/Table';
import Table from '../components/core/Table';


import data from '../data';


const HelpdeskPage: React.FC = () => {
  return (
    <div className='' >
    
        <Table headers={data.headers} data={data.users} showTextarea={true}  />
      
    </div>
  );
};

export default HelpdeskPage;