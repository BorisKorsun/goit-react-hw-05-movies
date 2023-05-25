import { BrowserRouter, Routes, Route } from "react-router-dom";

import SharedLayout from "components/SharedLayout";
import Home from "pages/Home";
import Movies from "pages/Movies";
import MovieCard from "pages/MovieCard";

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route path="movies" element={<Movies />}/>
          <Route path="/movies/:movieId" element={<MovieCard />}/>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
};
