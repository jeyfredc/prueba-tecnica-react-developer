import { Navigate, Route, Routes } from "react-router-dom";
import  NavBar  from "../ui/components/NavBar"
import MoviesPage from "../pages/MoviesPage";
import SeriesPage from "../pages/SeriesPage";
import LoginPage from "../pages/LoginPages";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { ShowsRoutes } from "../pages/ShowsRoutes";
const AppRouter = () => {
  return (
    <>

    <NavBar/>

    <Routes>
            
            <Route path="login/*" element={
                <PublicRoute>
                  
                  <Routes>
                    <Route path="/*" element={<LoginPage />} />
                  </Routes>
                </PublicRoute>
              }
            />
            
            
            <Route path="/*" element={
              <PrivateRoute>
                <ShowsRoutes/>
              </PrivateRoute>
            } />         
            

        </Routes>
    </>
  );
};

export default AppRouter;
