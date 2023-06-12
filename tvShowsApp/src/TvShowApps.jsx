import ShowsProvider from "../shows/context/ShowsProvider";
import AuthProvider from "./auth/context/AuthProvider";
import AppRouter from "./router/AppRouter";

const TvShowsApp = () => {
  return (
    <AuthProvider>
      <ShowsProvider>
        <AppRouter />
      </ShowsProvider>
    </AuthProvider>
  );
};

export default TvShowsApp;
