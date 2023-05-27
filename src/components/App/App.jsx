import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SharedLayout from "components/SharedLayout";
import Cast from "components/Cast"
import Reviews from "components/Reviews";
import Home from "../../pages/Home";
import Movies from "pages/Movies";
import MovieCard from "pages/MovieCard";

export default function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route path="movies" element={<Movies />}/>
          <Route path="movies/:movieId" element={<MovieCard />}>
            <Route path="cast" element={<Cast />}/>
            <Route path="reviews" element={<Reviews />}/>
          </Route>
          <Route path='*' element={<Home />}/>
        </Route>
      </Routes>
      <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      </>
  );
};
