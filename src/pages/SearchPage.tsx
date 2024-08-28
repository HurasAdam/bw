import React from 'react'
import Drawer from '../components/core/Drawer'
import Table from '../components/core/Table'
import data from '../data'
import SearchBar from '../components/core/SearchBar'

const SearchPage = () => {
  return (

<>
<SearchBar/>
<Table data={data.users} headers={data.headers} showTextarea={false} />
</>
  )
}

export default SearchPage