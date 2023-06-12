import { Navigate, Route, Routes } from "react-router-dom";
import  NavBar  from "../ui/components/NavBar"
import MoviesPage from "../pages/MoviesPage";
import SeriesPage from "../pages/SeriesPage";
import LoginPage from "../pages/LoginPages";
const AppRouter = () => {
  return (
    <>

    <NavBar/>
      <Routes>
        <Route path="/movies" element={<MoviesPage/>}/>
        <Route path="/series" element={<SeriesPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>

        <Route path="/" element={<Navigate to="/login" />} />

      </Routes>
    </>
  );
};

export default AppRouter;
