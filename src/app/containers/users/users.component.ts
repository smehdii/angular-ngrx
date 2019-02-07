import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/reducers/app.reducers";
import { Router } from "@angular/router";
import { GetUsers } from "../../store/actions/user.actions";
import { selectUserList } from "../../store/selectors/user.selector";

@Component({
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.sass"]
})
export class UsersComponent implements OnInit {
  users$ = this._store.pipe(select(selectUserList));

  constructor(private _store: Store<IAppState>, private _router: Router) {}

  ngOnInit() {
    this._store.dispatch(new GetUsers());
  }

  navigateToUser(id: number) {
    this._router.navigate(["user", id]);
  }
}
