import { ActionReducerMap } from "@ngrx/store";

import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { userReducers, IUserState, initialUserState } from "./user.reducers";
import {
  configReducers,
  IConfigState,
  intialConfigState
} from "./config.reducers";
import {
  movieReducers,
  IMovieState,
  initialMovieState
} from "./movie.reducers";

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

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducers,
  config: configReducers,
  movies: movieReducers
};
