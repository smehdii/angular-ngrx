import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { UserService } from "../../services/user.service";
import { IAppState } from "../state/app.state";
import { Store, select } from "@ngrx/store";
import {
  GetUsers,
  EUserActions,
  GetUsersSuccess,
  GetUser,
  GetUserSuccess
} from "../actions/user.action";
import { switchMap, map, withLatestFrom } from "rxjs/operators";
import { of } from "rxjs";
import { IUserHttp } from "../../models/http-models/user-http.interface";

import { selectUserList } from "../selectors/user.selector";

@Injectable()
export class UserEffects {
  @Effect()
  getUsers$ = this._actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => {
      return this._userService.getUsers();
    }),
    switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
  );

  @Effect()
  getUser$ = this._actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users.filter(user => user.id === +id)[0];
      return of(new GetUserSuccess(selectedUser));
    })
  );

  constructor(
    private _userService: UserService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
