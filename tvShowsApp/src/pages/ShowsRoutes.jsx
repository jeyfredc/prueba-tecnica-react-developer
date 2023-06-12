import { Navigate, Route, Routes } from 'react-router-dom';
import SeriesPage from './SeriesPage';
import MoviesPage from './MoviesPage';

export const ShowsRoutes = () => {
  return (
    <>

        <div className="container">
            <Routes>
                <Route path="series" element={<SeriesPage />} />
                <Route path="movies" element={<MoviesPage />} />                               

                <Route path="/" element={<Navigate to="/series" />} />

            </Routes>
        </div>


    </>
  )
}