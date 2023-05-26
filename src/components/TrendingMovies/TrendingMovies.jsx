import API from "API/api";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const service = new API();

export default function Home () {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        try {
            service.getTrendingMoviesPerDay().then(({ data: {results} }) => {
                console.log(results)
                setMovies(results)
            });
        } catch (e) {
            return setError(new Error(e)) 
        };
    }, [])
    return (
        <>
        <h3>Trending today</h3>
        <ul>
            {movies && movies.map(({ title, id }) => {
                return (
                    <li key={id}>
                        <Link to='/movies/:movieId'>{title}</Link>
                    </li>
                )
            })}
        </ul>
        </>
    )
}