import { createSelector } from "@ngrx/store";
import { IConfigState } from "../reducers/config.reducers";
import { IAppState } from "../reducers/app.reducers";

// export interface IAppState {
// router?: RouterReducerState;
// users: IUserState;
// config: IConfigState;
//   }

const configState = (state: IAppState) => state.config;

export const selectConfig = createSelector(
  configState,
  (state: IConfigState) => {
    return state.config;
  }
);
