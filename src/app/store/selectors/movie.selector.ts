import { createSelector } from "@ngrx/store";
import { IAppState } from "../reducers/app.reducers";
import { IMovieState } from "../reducers/movie.reducers";

const selectMovies = (state: IAppState) => state.movies;

export const selectMovieList = createSelector(
  selectMovies,
  (state: IMovieState) => state.movies
);

export const selectSelectedMovie = createSelector(
  selectMovies,
  (state: IMovieState) => state.selectedMovie
);
