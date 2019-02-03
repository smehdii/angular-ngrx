import { RouterReducerState } from "@ngrx/router-store";
import { IUserState, initialUserState } from "./user.state";
import { IConfigState, intialConfigState } from "./config.state";
import { IMovieState, initialMovieState } from "./movie.state";

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  config: IConfigState;
  movies: IMovieState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  config: intialConfigState,
  movies: initialMovieState
};

export const getInitialState = () => {
  return initialAppState;
};
