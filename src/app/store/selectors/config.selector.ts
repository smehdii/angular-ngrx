import { IAppState } from "../state/app.state";
import { createSelector } from "@ngrx/store";
import { IConfigState } from "../state/config.state";

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
