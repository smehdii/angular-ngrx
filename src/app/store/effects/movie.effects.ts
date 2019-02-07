import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/reducers/app.reducers";
import { MovieService } from "../../services/movie.service";
import {
  GetMovies,
  EMovieActions,
  GetMoviesSuccess,
  GetMovie,
  GetMovieSuccess
} from "../actions/movie.actions";
import { switchMap, map, withLatestFrom } from "rxjs/operators";
import { of } from "rxjs";
import { selectMovieList } from "../selectors/movie.selector";

@Injectable()
export class MovieEffects {
  @Effect()
  getMovies$ = this._actions$.pipe(
    ofType<GetMovies>(EMovieActions.GetMovies),
    switchMap(() => {
      return this._movieService.getMovies();
    }),
    switchMap((movieHttp: any) => {
      console.log("movies", movieHttp);
      return of(new GetMoviesSuccess(movieHttp.Search));
    })
  );

  @Effect()
  getMovie$ = this._actions$.pipe(
    ofType<GetMovie>(EMovieActions.GetMovie),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectMovieList))),
    switchMap(([id, movies]) => {
      const selectedMovie = movies.filter(movie => movie.imdbID === id)[0];
      return of(new GetMovieSuccess(selectedMovie));
    })
  );

  constructor(
    private _movieService: MovieService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
