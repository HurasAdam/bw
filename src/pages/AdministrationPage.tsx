import React from 'react'
import Table from '../components/core/Table'
import data from '../data'

const AdministrationPage = () => {
  return (
    <div >
    
    <div >
    
        <Table headers={data.headers} data={data.users} />
      
    </div>
  
</div>
  )
}

export default AdministrationPage