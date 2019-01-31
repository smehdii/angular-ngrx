import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { UserService } from "../../services/user.service";
import { IAppState } from "../states/app.state";
import { Store } from "@ngrx/store";
import {
  GetUsers,
  EUserActions,
  GetUsersSuccess
} from "../actions/user.action";
import { switchMap, map, withLatestFrom } from "rxjs/operators";
import { of } from "rxjs";
import { IUserHttp } from "../../models/http-models/user-http.interface";

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

  constructor(
    private _userService: UserService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
