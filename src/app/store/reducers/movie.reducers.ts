import { initialMovieState } from "../state/movie.state";
import { MovieActions, EMovieActions } from "../actions/movie.actions";

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
