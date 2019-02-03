import { IAppState } from "../state/app.state";
import { IMovieState } from "../state/movie.state";
import { createSelector } from "@ngrx/store";

const selectMovies = (state: IAppState) => state.movies;

export const selectMovieList = createSelector(
  selectMovies,
  (state: IMovieState) => state.movies
);

export const selectSelectedMovie = createSelector(
  selectMovies,
  (state: IMovieState) => state.selectedMovie
);
