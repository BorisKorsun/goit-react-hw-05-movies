import { BrowserRouter, Routes, Route } from "react-router-dom";



export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
    <div>
      <Routes>
        <Route path="/">

        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
};
