import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Author } from "./Reviews.styled";

import API from "API/api";

const service = new API();
const IMG_URL = 'https://image.tmdb.org/t/p/w300';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const {movieId} = useParams({});

    useEffect(() => {
        try {
            service.getMovieReviews(movieId).then(({ data: {results} }) => {
                setReviews(results);
            })
        } catch(e) {
            console.log(e)
        }
    }, [movieId])

    return (
        <ul>
            {reviews.map(({ author, content, id}) => {
                return (
                    <li key={id}>
                        <Author>{author}</Author>
                        <p>{content}</p>
                    </li>
                )
            })}
        </ul>
    )
};