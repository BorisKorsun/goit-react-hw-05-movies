import { useEffect, useState } from "react";
import API from "API/api";

import MovieItem from "./MovieItem";

const service = new API();

export default function SearchMovies({ query }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        if (query === '') {
            return;
        };

        try {
            service.searchMovies(query).then(({ data: {results}}) => {
                setMovies(results)
            })
        } catch (e) {
            console.log(e)
        }
    }, [query])

    return(
        <ul>
            {movies.map(({ title, id }) => {
                return <MovieItem key={id} title={title} />
            })}
        </ul>
    )
};