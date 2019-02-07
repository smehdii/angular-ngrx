import { MovieActions, EMovieActions } from "../actions/movie.actions";
import { IMovie } from "../../models/movie.interface";

export interface IMovieState {
  movies: IMovie[];
  selectedMovie: IMovie;
}

export const initialMovieState: IMovieState = {
  movies: null,
  selectedMovie: null
};

export const movieReducers = (
  state = initialMovieState,
  action: MovieActions
) => {
  switch (action.type) {
    case EMovieActions.GetMovieSuccess: {
      return {
        ...state,
        movie: action.payload
      };
    }
    case EMovieActions.GetMoviesSuccess: {
      return {
        ...state,
        movies: action.payload
      };
    }
    default:
      return state;
  }
};
