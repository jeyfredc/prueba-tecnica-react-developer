import { useContext } from "react";
import { ShowsContext } from "../../shows/context/ShowsContext";
import WindowView from "../ui/components/WindowView";

const SeriesPage = () => {
  const { seriesListt } = useContext(ShowsContext);

  return (
    <div className="row justify-content-center text-center">
      {seriesListt === undefined ? (
        <p>Oops, something went wrong </p>
      ) : (
        seriesListt.seriesList.entries
          .filter(
            (entry) =>
              entry.releaseYear >= 2010 && entry.programType === "series"
          )
          .sort((a, c) => a.title.localeCompare(c.title)) // Ordenar por título en orden alfabético
          .slice(0, 20) // Mostrar solo los primeros 20 objetos
          .map((entry, index) => <WindowView entry={entry} key={index} />)
      )}
    </div>
  );
};

export default SeriesPage;
