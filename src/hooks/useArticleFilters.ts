import { useCallback } from "react";
import { useSearchParams } from "react-router-dom"

const useArticleFilters = ()=>{
    const [searchParams, setSearchParams] = useSearchParams();



    const title = searchParams.get("title") || "";
    const tags = searchParams.getAll("tags");
    const page = searchParams.get("page") ||1;


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

            if (filters.page !== undefined) {
                params.set("page", filters.page.toString());
              }

            return params;
        });
    }, []);

return {
    title,
    tags,
    page,
    setFilters
}

}

export default useArticleFilters;