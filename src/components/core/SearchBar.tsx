import React, { useState } from 'react';
import { Input } from '@headlessui/react'

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <Input
      type="text"
      placeholder="Search"
      value={query}
      onChange={handleChange}
      className="border rounded p-2 w-full"
    />
  );
};

export default SearchBar;