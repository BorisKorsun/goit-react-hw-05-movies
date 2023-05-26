import API from "API/api";
import { useEffect, useState, useRef } from "react";

import ResolvedView from "./StatusView/ResolvedView";
import RejectedView from "./StatusView/RejectedView";

const service = new API();

export default function Home () {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('idle')

    const statusMachine = useRef({
        IDLE: 'idle',
        PENDING: 'pending',
        REJECTED: 'rejected',
        RESOLVED: 'resolved'
    });

    useEffect(() => {
        const { PENDING, REJECTED, RESOLVED } = statusMachine.current;
        try {
            setStatus(PENDING);
            service.getTrendingMoviesPerDay().then(({ data: {results} }) => {
                setStatus(RESOLVED)
                setMovies(results)
            });
        } catch (e) {
            setStatus(REJECTED)
            return setError(new Error(e)) 
        };
    }, []);

    if(status === statusMachine.current.RESOLVED) {
        return <ResolvedView movies={movies}/>
    };

    if(status === statusMachine.current.REJECTED) {
        return <RejectedView error={error}/>
    }
};