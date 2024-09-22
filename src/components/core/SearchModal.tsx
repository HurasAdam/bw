import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useMemo, useState } from 'react'
import SearchBar from './SearchBar'
import { FcSearch } from "react-icons/fc";
import { useQuery } from '@tanstack/react-query';
import { tagsApi } from '../../services/tagsApi';
import { useNavigate } from 'react-router-dom';
import useArticleFilters from '../../hooks/useArticleFilters';

const  SearchModal =({isModalOpen,setIsModalOpen})=> {

const {setFilters} = useArticleFilters();
const navigate = useNavigate();
const [localTitle, setLocalTitle] = useState('');
const [localTags, setLocalTags] = useState([]);
const [localAuthor, setLocalAuthor] = useState("");
const [localVerified,setLocalVerified] = useState(false);



console.log("localTags")
console.log(localTags)




const {data:tags,refetch}=useQuery({
  queryFn:()=>{
   return tagsApi.getAllTags();
  },
  queryKey:["tags"],
  refetchOnWindowFocus: false,
})


const searchHandler = () => {
  // Ustawienie pustych wartości w hooku useArticleFilters (dla czyszczenia parametrów)
  setFilters({ title: "", verified: false, author: "", tags: [] });

  // Tworzymy obiekt URLSearchParams i ręcznie ustawiamy warunki
  const queryParams = new URLSearchParams();

  // Ustawiamy tytuł, jeśli nie jest pusty
  if (localTitle) {
    queryParams.set('title', localTitle);
  }

  // Dodajemy każdy tag jako osobny parametr
  if (localTags.length > 0) {
    localTags.forEach(tag => {
      queryParams.append('tags', tag?.value);
    });
  }

  // Ustawiamy autora, jeśli nie jest pusty
  if (localAuthor) {
    queryParams.set('author', localAuthor);
  }

  // Dodajemy parametr 'verified' tylko wtedy, gdy jego wartość to true
  if (localVerified) {
    queryParams.set('verified', "true");
  }

  // Przekierowanie do wyników z dynamicznie generowanymi parametrami
  navigate(`/articles?${queryParams.toString()}`);

  // Czyszczenie lokalnych stanów po wyszukiwaniu
  setLocalTags([]);
  setLocalTitle("");
  setLocalAuthor("");
  setIsModalOpen(false);
};

  return (
    <>
      
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-zinc-900/60 ">
          <DialogPanel className="min-w-[620px] max-w-[620px] rounded-md space-y-10 border bg-white p-12">
            <DialogTitle className="font-bold text-2xl text-slate-600 flex items-center gap-2"><FcSearch/> Wyszukaj artykuł</DialogTitle>
            <Description className="">
              <SearchBar 
            refetch={refetch} 
            tagsList={tags}
            onTitleChange={setLocalTitle}
            onTagsChange={setLocalTags}
            onAuthorChange={setLocalAuthor}
            onVerifyChange={setLocalVerified}
            instantSearch={false}
            localVerified={localVerified}
            localAuthor={localAuthor}
            localTitle={localTitle}
        gap="1"
        className="flex-col flex"
            />
            </Description>
 
            <div className="flex gap-8 justify-end px-3">
              <button className='text-slate-500' onClick={() => setIsModalOpen(false)}>Anuluj</button>
              <button className='border px-4 py-1.5 rounded hover:bg-blue-300 transition-all delay-50 shadow-sm bg-blue-400/85 text-white font-semibold' onClick={searchHandler}>Szukaj</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default SearchModal;