import { Link } from "react-router-dom";

export default function ResolvedView({movies}) {
    return (
        <>
        <h3>Trending today</h3>
        <ul>
            {movies && movies.map(({ title, id }) => {
                return (
                    <li key={id}>
                        <Link to={`/movies/${id}`}>{title}</Link>
                    </li>
                )
            })}
        </ul>
        </>
    )
}