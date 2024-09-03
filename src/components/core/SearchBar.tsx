import React, { useState } from 'react';
import { Input } from '@headlessui/react'

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch,className }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <Input
      type="text"
      placeholder="Wyszukaj"
      value={query}
      onChange={handleChange}
      className={`${className} border rounded p-2 px-3 w-full`}
    />
  );
};

export default SearchBar;