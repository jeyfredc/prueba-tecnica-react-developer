import "../styles/navBar.css";

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../auth/context/AuthContext";
import { ShowsContext } from "../../../shows/context/ShowsContext";

const NavBar = () => {
  const { login, logged, logout } = useContext(AuthContext);
  const { seriesList } = useContext(ShowsContext);

  console.log(logged);

  const navigate = useNavigate();

  const handleLogin = async () => {
    login("Usuario");
    // if (user.name !== "Usuario") return;
    seriesList();
    setTimeout(() => {
      navigate("/series", {
        replace: true,
      });
    }, 3000);
  };
  const onLogout = () => {
    logout()
  }

  return (
    <nav className=" d-flex justify-content-center align-items-center navbar navbar-expand-sm navbar-primary bg-primary p-2 ">
      <div className="navbar-collapse">
        <div className="d-flex flex-grow-1 justify-content-center">
          {!logged ? (
            <h2 className="text-bg-primary title-h2">DEMO Streaming</h2>
          ) : (
            <>
              <Link
                className="nav-item nav-link btn p-3 text-bg-dark m-2"
                to="/series"
              >
                Series
              </Link>

              <Link
                className="nav-item nav-link btn p-3 text-bg-dark m-2"
                to="/movies"
              >
                Movies
              </Link>
            </>
          )}
        </div>
        <ul className="navbar-nav ml-auto align-items-center">
          {!logged ? (
            <>
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>

              <button
                className="nav-item nav-link btn p-3 text-bg-dark"
              >
                Start your free trial
              </button>
            </>
          ) : (
            <>
              <button
                className="btn btn-danger p-3 "
                onClick={ onLogout }
                
              >
                Logout
              </button>
            </>
          )}
        </ul>
        
      </div>
    </nav>
  );
};

export default NavBar;
