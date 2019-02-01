import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";
import { ActivatedRoute } from "@angular/router";
import { selectSelectedUser } from "../../store/selectors/user.selector";
import { GetUser } from "../../store/actions/user.actions";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.sass"]
})
export class UserComponent implements OnInit {
  user$ = this._store.pipe(select(selectSelectedUser));

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._store.dispatch(new GetUser(this._route.snapshot.params.id));
  }
}
