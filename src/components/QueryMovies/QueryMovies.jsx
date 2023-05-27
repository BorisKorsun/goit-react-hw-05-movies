import { useState } from "react";

import SearchForm from "components/SearchForm";
import { useSearchParams } from "react-router-dom";

export default function QueryMovies() {
    const [searchParams, setSearchParams] = useSearchParams();

    // const queryString = searchParams.get('query') ?? '';

    const handleSubmit = (query) => {
        const nextParams = query !== "" ? { query } : {};
        setSearchParams(nextParams);
    };

    return (
        <>
        <SearchForm onSubmit={handleSubmit}/>
        </>
    )
}