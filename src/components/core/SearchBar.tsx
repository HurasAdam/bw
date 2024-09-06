import React, { useState } from 'react';
import Select from "react-select";
import { Input } from '@headlessui/react'
import data from '../../data';
const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch,className }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
<div>
<Input
      type="text"
      placeholder="Wyszukaj"
      value={query}
      onChange={handleChange}
      className={`${className} border rounded p-2 px-3 w-full`}
    />
    <Select placeholder="Wybierz tag" className='py-0.5' isMulti={true} options={data.selectUsersList}/>
</div>

  );
};

export default SearchBar;