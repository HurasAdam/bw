import React from 'react'
import Drawer from '../components/core/Drawer'
import Table from '../components/core/Table'
import data from '../data'
import SearchBar from '../components/core/SearchBar'
import { Button } from '@headlessui/react'
import { NavLink } from 'react-router-dom'

const SearchPage = () => {
  return (

<div className='flex flex-col gap-10'>
<div className='flex justify-end'>
<NavLink className="bg-blue-600 px-1.5 py-2 rounded text-slate-100 font-semibold" to="/arcticle/new">Nowy artykuł</NavLink>
</div>
<SearchBar className="w-2/5 mx-auto"/>
<Table data={data.users} headers={data.headers} showTextarea={false} />
</div>
  )
}

export default SearchPage