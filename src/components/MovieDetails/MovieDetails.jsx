import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom"
import { Link } from "react-router-dom";

import { CardContainer, Title, Score, SubTitle, Desctiption } from "./MovieDetails.styled";

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
        <>
        <CardContainer>
        <img src={poster ? IMG_URL + poster : 'https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png'} alt={title}/>
        <div>
            <Title>{`${title}: (${year.slice(0, 4)})`} </Title>
            <Score>User score: {Math.round(score * 10)}%</Score>
            <SubTitle>Overview</SubTitle>
            <Desctiption>{desc}</Desctiption>
            <SubTitle>Genres</SubTitle>
            <ul>
            {genres.map(({ name, id }) => {
                return <li key={id}>{name}</li>
            })}
            </ul>
        </div>
    </CardContainer>
    
    <section>
        <h4>Additional inforamtion</h4>
        <ul>
            <li><Link to="cast">Cast</Link></li>
            <li><Link>Reviews</Link></li>
        </ul>

        <Outlet />
    </section>
    </>
    )
}