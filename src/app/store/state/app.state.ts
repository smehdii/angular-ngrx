import { RouterReducerState } from "@ngrx/router-store";
import { IUserState, initialUserState } from "./user.state";
import { IConfigState, intialConfigState } from "./config.state";

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  config: IConfigState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  config: intialConfigState
};

export const getInitialState = () => {
  return initialAppState;
};
