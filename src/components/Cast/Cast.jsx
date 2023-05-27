import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Item } from "./Cast.styled";

import API from "API/api";

const service = new API();
const IMG_URL = 'https://image.tmdb.org/t/p/w300';

export default function Cast() {
    const [cast, setCast] = useState([])
    const {movieId} = useParams({});

    useEffect(() => {
        try {
            service.getMovieCast(movieId).then(({ data: { cast, id } }) => {
                setCast(cast);
            })
        } catch(e) {
            console.log(e)
        }
    }, [movieId])

    return (
        <ul>
            {cast.map(({ profile_path, id, name }) => {
                return (
                <Item key={id}>
                    <img width='100px' src={profile_path ? IMG_URL + profile_path : 'https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png'} alt={name}/>
                    <p>{name}</p>
                </Item>
                )
            })}
        </ul>
    )
};