
import { useSearchParams } from "react-router-dom";

import SearchForm from "components/SearchForm";
import SearchMovies from "components/SearchMovies";

export default function QueryMovies() {
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('query') ?? '';

    const handleSubmit = (query) => {
        const nextParams = query !== "" ? { query } : {};
        setSearchParams(nextParams);
    };

    return (
        <>
        <SearchForm onSubmit={handleSubmit} />
        <SearchMovies query={query} />
        </>
    )
}