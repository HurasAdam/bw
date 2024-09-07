import React, { useMemo } from 'react';
import Select from "react-select";
import { Input } from '@headlessui/react'
import useArticleFilters from '../../hooks/useArticleFilters';
const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch,className, searchParams,handleTitleChange,handleTagChange,tagsList,refetch }) => {
  
  const {title, setFilters} = useArticleFilters();






const tagsOptions = useMemo(
  () =>
    tagsList?.map((tag) => ({
      value: tag._id,
      label: tag.name,
    })),
  [tagsList]
);



  return (
<div>
<Input
      type="text"
      placeholder="Wyszukaj"
      value={title}
      onChange={(e)=>setFilters({title:e.target.value})}
      className={`${className} border rounded p-2 px-3 w-full`}
    />
    <Select placeholder="Wybierz tag" className='py-0.5' isMulti={true} options={tagsOptions} onChange={(selected)=>setFilters({tags:selected})}  onMenuOpen={refetch} />
  
</div>

  );
};

export default SearchBar;