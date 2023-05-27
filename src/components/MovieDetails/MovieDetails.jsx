import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import API from "API/api";

const service = new API();
const IMG_URL = 'https://image.tmdb.org/t/p/w300';

export default function MovieDetails() {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [score, setScore] = useState(null);
    const [desc, setDesc] = useState('');
    const [genres, setGenres] = useState([]);
    const [poster, setPoster] = useState('');

    const {movieId} = useParams();
    
    useEffect(() => {
        try {
            service.getMovieById(movieId).then(({ data: { genres, overview, title, vote_average, release_date, poster_path } }) => {
                setTitle(title);
                setGenres(genres);
                setYear(release_date);
                setScore(vote_average);
                setDesc(overview);
                setPoster(poster_path);
            });
        } catch(e) {
            console.log(e)
        }
    }, [movieId])
    return(
    <div>
        <img src={poster && IMG_URL + poster} alt='poster'/>
        <div>
            <h3>{`${title}: (${year})`} </h3>
            <p>User score: {score}</p>
            <p>Overview</p>
            <p>{desc}</p>
            <p>Genres</p>
            <ul>
            {genres.map(({ name, id }) => {
                return <li key={id}>{name}</li>
            })}
            </ul>
        </div>
    </div>
    )
}