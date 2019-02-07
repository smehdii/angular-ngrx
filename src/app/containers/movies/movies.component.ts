import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Router } from "@angular/router";
import { GetMovies } from "../../store/actions/movie.actions";
import { selectMovieList } from "../../store/selectors/movie.selector";
import { IAppState } from "../../store/reducers/app.reducers";

@Component({
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.sass"]
})
export class MoviesComponent implements OnInit {
  movies$ = this._store.pipe(select(selectMovieList));

  constructor(private _store: Store<IAppState>, private _router: Router) {}

  ngOnInit() {
    this._store.dispatch(new GetMovies());
  }

  navigateToMovie(id: string) {
    this._router.navigate(["movie", id]);
  }
}
