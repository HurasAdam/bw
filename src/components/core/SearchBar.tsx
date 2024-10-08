import React, { useMemo } from 'react';
import Select from "react-select";
import { Input } from '@headlessui/react'
import useArticleFilters from '../../hooks/useArticleFilters';
import { IoMdSearch } from "react-icons/io";
import { HiOutlineHashtag } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import CheckBox from './CheckBox';

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ fetchUsers,authorsList,gap,onSearch,className, searchParams,handleTitleChange,handleTagChange,tagsList,refetch,instantSearch=true,localVerified,onVerifyChange,onAuthorChange,onTitleChange,onTagsChange,localTitle, localTags  }) => {
  
  const {title, setFilters,tags,author,verified} = useArticleFilters();

const tagsOptions = useMemo(
  () =>
    tagsList?.map((tag) => ({
      value: tag._id,
      label: tag.name,
    })),
  [tagsList]
);

const authorOptions = useMemo(
  () =>
    authorsList?.map((tag) => ({
      value: tag._id,
      label: tag.name +" " + tag.surname,
    })),
  [authorsList]
);

const selectedAuthor = authorOptions?.find((opt) => opt.value === author) || null;

const urlTitleHandler= (e) =>{
if(instantSearch){
  setFilters({title:e.target.value})
}else{
  onTitleChange(e.target.value)
}

}


const xd = (selected)=>{
  selected.forEach((tag)=>{
    onTagsChange(tag?.value)
  })
}
  


const urltagsHandler =(selected) =>{
  if(instantSearch){
   setFilters({tags:selected})
  }else{
  console.log(selected)
  onTagsChange(selected)

  }
}

const urlAuthorHandler = (selected) =>{
if(instantSearch){
setFilters({author:selected})
}else{
  console.log(selected)
onAuthorChange(selected)
  }
}
 
const handleClearButton = (e) => {
  e.stopPropagation(); 
if(instantSearch){
  if(title.length>0)
    setFilters({title:""})
}else{
  onTitleChange("")
}
};

const handleAuthorClear = () =>{

 if(instantSearch){
  setFilters({author:""})
 }else{
  onAuthorChange("")
 }
}


const urlVerifiedHandler = () =>{
  if(instantSearch){
    setFilters({verified:!verified})
  }else{
  
    onVerifyChange((prev)=>!prev)
  }
}

const handleResetFilters = () =>{
  if(instantSearch){
    setFilters({title:"", verified:false, author:"", tags:[]})
  }

}


const filteredTags = tagsList?.filter(tag => tags.includes(tag._id)).map(({_id,name})=>{
  return {label:name, value:_id}
});
console.log(filteredTags &&filteredTags)
  return (
<div className={`  flex ${className}   mx-auto px-0.5 gap-1  rounded-md  `}>

<div className='flex-1'>
  <div className='flex flex-col gap-2 '>
    <span className='text-md text-gray-600 font-semibold '>Tytuł</span>
<div className='relative'>

<Input
name='tytuł'
type="text"
placeholder="Wyszukaj"
value={instantSearch ? title :localTitle}
onChange={(e)=>urlTitleHandler(e)}
className={` border border-gray-500/80 bg-gray-50 rounded-lg p-2 px-8 w-full focus:outline-blue-400  `}
/>
<IoMdSearch className='absolute top-[14px] left-3.5 text-gray-500'/>
<button 
onClick={(e)=>handleClearButton(e)}
className='border px-1.5 py-1.5 bg-slate-200 text-slate-400 hover:bg-blue-200 hover:text-blue-500 rounded-lg transition-all absolute top-[6px] right-2 '><RxCross2/>
</button>
</div>
</div>
</div>

{/* AUTHOR FILTER*/}
<div className='flex flex-col relative'>
<div className='flex-1 '>
<span className='text-md text-gray-600/90 mt-2.5 font-semibold '>Autor</span>
<div className='flex gap-2 justify-between '>
<div className='flex-1'>
<Select 
  classNamePrefix="react-select"
  className="custom-select-primary"
  placeholder="Wybierz autora" 
  className='py-2 ' 
 value={selectedAuthor}
  options={authorOptions} 
  onChange={(selected)=>urlAuthorHandler(selected)}  
  onMenuOpen={fetchUsers} />
</div>
<button 
onClick={handleAuthorClear}
className='border px-1.5 py-1.5 bg-slate-200 text-slate-400 hover:bg-blue-200 hover:text-blue-500 rounded-lg transition-all absolute top-[38px] right-2.5  '><RxCross2/>
</button>
</div>
</div>
</div>

{/* TAGS FILTER */}

<div className='flex-1'>
  <div className='flex flex-col gap-2'>
<span className='text-md text-gray-600 font-semibold '>Tag</span>
{instantSearch ? <Select 
      value={filteredTags}
    placeholder={<span className='flex items-center  gap-1 text-gray-400'><HiOutlineHashtag/>Wybierz Tag</span> }
     classNamePrefix="react-select"
    isMulti={true} 
    options={tagsOptions}
    onChange={(selected)=>urltagsHandler(selected)}  
    onMenuOpen={refetch} />
    :<Select 
         classNamePrefix="react-select"
         value={localTags}
  placeholder="Wybierz tag" 
  className='py-2 ' 
  isMulti={true} 
  options={tagsOptions} 
  onChange={(selected)=>urltagsHandler(selected)}  
  onMenuOpen={refetch} />}
</div>
</div>

{/*  */}
<div>
  <span></span>
  <CheckBox onChange={urlVerifiedHandler} checked={instantSearch ? verified :localVerified}/>
</div>

{instantSearch &&<button 
onClick={handleResetFilters}
className='my-1.5 text-sm text-gray-500/90 font-normal font-inter hover:text-gray-800 transition-all'
>
  Wyczyść filtry
  </button>}

</div>

  );
};

export default SearchBar;