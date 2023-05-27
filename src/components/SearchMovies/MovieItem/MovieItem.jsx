import { Link } from "react-router-dom"

export default function MovieItem ({ title }) {
    return (
        <li>
            <Link to='/movies/:movieId'>{title}</Link>
        </li>
    )
}