import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedLayout.styled";

export default function SharedLayout () {
    return (
        <Container>
            <Header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                </nav>
            </Header>
            <main>
                <Outlet />
            </main>
        </Container>
    );
};