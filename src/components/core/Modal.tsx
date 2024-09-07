import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useMemo, useState } from 'react'
import SearchBar from './SearchBar'
import { FcSearch } from "react-icons/fc";
import { useQuery } from '@tanstack/react-query';
import { tagsApi } from '../../services/tagsApi';
import { useNavigate } from 'react-router-dom';

const  Modal =()=> {
  const [isOpen, setIsOpen] = useState(false)
const navigate = useNavigate();
const [localTitle, setLocalTitle] = useState('');
const [localTags, setLocalTags] = useState([]);



console.log("localTags")
console.log(localTags)




const {data:tags,refetch}=useQuery({
  queryFn:()=>{
   return tagsApi.getAllTags();
  },
  queryKey:["tags"],

})


const searchHandler = () => {
  const queryParams = new URLSearchParams({
    title: localTitle
  });

  // Dodaj każdy tag jako oddzielny parametr
  localTags.forEach(tag => {
    queryParams.append('tags', tag.value);
  });

  // Generuj pełny query string i przekieruj
  navigate(`/search?${queryParams.toString()}`);
  setIsOpen(false);
};

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Szukaj</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-zinc-900/60 ">
          <DialogPanel className="min-w-[600px] rounded-md space-y-10 border bg-white p-12">
            <DialogTitle className="font-bold text-2xl text-slate-600 flex items-center gap-2"><FcSearch/> Wyszukaj artykuł</DialogTitle>
            <Description>
              <SearchBar 
            refetch={refetch} 
            tagsList={tags}
            onTitleChange={setLocalTitle}
            onTagsChange={setLocalTags}
            instantSearch={false}
        gap="1"
            />
            </Description>
          <div className='flex flex-col items-start'>
            <label htmlFor="">Zweryfikowane</label>
            <input type="checkbox" />
          </div>
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Anuluj</button>
              <button onClick={searchHandler}>Szukaj</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default Modal;