import React from "react";
import { useParams , useRouteMatch} from "react-router-dom";

// Here we add `match` to the arguments so we can access the path information
// in `routerProps` that is passed from MoviesPage.js
function MovieShow({ movies }) {
  const match = useRouteMatch();
  console.log(match.url);
  // call useParams to access the `params` from the url:
  // the dynamic portion of our /movies/:movieId path
  const params = useParams();
console.log("Params:")
  console.log(params.movie_Id);

  return (
    <div>
      {/*
        And here we access the `movieId` stored in `params` to render 
        information about the selected movie
      */}
      <h3>{movies[params.movie_Id].title}</h3>
    </div>
  );
}

export default MovieShow; 