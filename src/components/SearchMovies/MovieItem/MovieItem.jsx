import { Link } from "react-router-dom"

export default function MovieItem ({ title, id }) {
    return (
        <li>
            <Link to={`/movies/${id}`}>{title}</Link>
        </li>
    )
}