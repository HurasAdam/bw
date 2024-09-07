import React, { useMemo } from 'react';
import Select from "react-select";
import { Input, Switch } from '@headlessui/react'
import useArticleFilters from '../../hooks/useArticleFilters';
import SwitchButton from './SwitchButton';

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
 


const filteredTags = tagsList?.filter(tag => tags.includes(tag._id)).map(({_id,name})=>{
  return {label:name, value:_id}
});
console.log(filteredTags &&filteredTags)
  return (
<div className={`  flex flex-col   mx-auto py-6 px-0.5 gap-1 shadow-xs rounded-md    `}>

<div className='flex-1'>
<Input
      type="text"
      placeholder="Wyszukaj"
      value={instantSearch ? title :localTitle}
      onChange={(e)=>urlTitleHandler(e)}
      className={`${className} border border-slate-300 shadow-sm rounded p-2 px-3 w-full `}
    />

</div>

<div className='flex-1'>
{instantSearch ? <Select 
      value={instantSearch && filteredTags}
    placeholder="Wybierz tag" 
     classNamePrefix="react-select"
    isMulti={true} 
    options={tagsOptions}
  
    onChange={(selected)=>urltagsHandler(selected)}  
    onMenuOpen={refetch} />
    :<Select 
    
  placeholder="Wybierz tag" 
  className='py-2' 
  isMulti={true} 

  options={tagsOptions} 
  onChange={(selected)=>urltagsHandler(selected)}  
  onMenuOpen={refetch} />}


</div>






</div>

  );
};

export default SearchBar;