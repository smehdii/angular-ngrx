import { createSelector } from "@ngrx/store";

import { IUserState } from "../reducers/user.reducers";
import { IAppState } from "../reducers/app.reducers";

const selectUsers = (state: IAppState) => state.users;

export const selectUserList = createSelector(
  selectUsers,
  (state: IUserState) => state.users
);

export const selectSelectedUser = createSelector(
  selectUsers,
  (state: IUserState) => state.selectedUser
);
