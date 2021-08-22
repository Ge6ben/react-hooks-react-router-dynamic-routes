import React from "react";
import MoviesList from "./MoviesList";
import { Route, useRouteMatch } from "react-router-dom";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  
  //useRouteMatch returns a special object with information about
  // the currently matched route
  const match = useRouteMatch();
  console.log(match.url);
  return (
    <div>
      <MoviesList movies={movies} />
      <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>
      <Route path={`${match.url}/:movie_Id`}>
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}
export default MoviesPage;
