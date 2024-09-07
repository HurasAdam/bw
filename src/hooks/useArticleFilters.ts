import { useCallback } from "react";
import { useSearchParams } from "react-router-dom"

const useArticleFilters = ()=>{
    const [searchParams, setSearchParams] = useSearchParams();



    const title = searchParams.get("title") || "";
    const tags = searchParams.getAll("tags");
    const page = searchParams.getAll("page");


    const setFilters = useCallback((filters) => {
        setSearchParams((params) => {
            if (filters.title !== undefined) {
                params.set('title', filters.title);
            } 

            if (filters.tags !== undefined) {
                params.delete('tags');
                filters.tags.forEach((tag) => {
                    params.append('tags', tag.value); // tagi powinny być przekazywane jako wartości
                });
            } 

            return params;
        });
    }, []);

return {
    title,
    tags,
    setFilters
}

}

export default useArticleFilters;