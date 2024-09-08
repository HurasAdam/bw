import React, { useMemo } from 'react';
import Select from "react-select";
import { Input, Switch } from '@headlessui/react'
import useArticleFilters from '../../hooks/useArticleFilters';
import { IoMdSearch } from "react-icons/io";
import { HiOutlineHashtag } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ gap,onSearch,className, searchParams,handleTitleChange,handleTagChange,tagsList,refetch,instantSearch=true,onTitleChange,onTagsChange,localTitle, localTags  }) => {
  
  const {title, setFilters,tags} = useArticleFilters();


const tagsOptions = useMemo(
  () =>
    tagsList?.map((tag) => ({
      value: tag._id,
      label: tag.name,
    })),
  [tagsList]
);


const urlTitleHandler= (e) =>{
if(instantSearch){
  setFilters({title:e.target.value})
}else{
  onTitleChange(e.target.value)
}

}
const urltagsHandler =(selected) =>{
  if(instantSearch){
   setFilters({tags:selected})
  }else{
  console.log(selected)
onTagsChange(selected)
  }
}
 
const handleClearButton = (e) => {
  e.stopPropagation(); 

  if(title.length>0)
  setFilters({title:""})
};



const filteredTags = tagsList?.filter(tag => tags.includes(tag._id)).map(({_id,name})=>{
  return {label:name, value:_id}
});
console.log(filteredTags &&filteredTags)
  return (
<div className={`  flex flex-col   mx-auto py-6 px-0.5 gap-1 shadow-xs rounded-md    `}>

<div className='flex-1'>
<div className='relative'>
<Input

type="text"
placeholder="Wyszukaj"
value={instantSearch ? title :localTitle}
onChange={(e)=>urlTitleHandler(e)}
className={`${className} border border-slate-300 shadow-sm rounded p-2 px-8 w-full focus:outline-blue-400  `}
/>
<IoMdSearch className='absolute top-[14px] left-3.5 text-gray-500'/>
<button 
onClick={(e)=>handleClearButton(e)}
className='border px-1.5 py-1.5 bg-slate-200 text-slate-400 hover:bg-blue-200 hover:text-blue-500 rounded-lg transition-all absolute top-[6px] right-2 '><RxCross2/>
</button>
</div>
</div>

<div className='flex-1'>
{instantSearch ? <Select 
      value={instantSearch && filteredTags}
    placeholder={<span className='flex items-center gap-1 text-gray-400'><HiOutlineHashtag/>Wybierz Tag</span> }
     classNamePrefix="react-select"
    isMulti={true} 
    options={tagsOptions}
  
    onChange={(selected)=>urltagsHandler(selected)}  
    onMenuOpen={refetch} />
    :<Select 
    
  placeholder="Wybierz tag" 
  className='py-2 ' 
  isMulti={true} 

  options={tagsOptions} 
  onChange={(selected)=>urltagsHandler(selected)}  
  onMenuOpen={refetch} />}


</div>






</div>

  );
};

export default SearchBar;