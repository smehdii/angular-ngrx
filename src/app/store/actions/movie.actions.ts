import { Action } from "@ngrx/store";
import { IMovie } from "../../models/movie.interface";

export enum EMovieActions {
  GetMovies = "[Movie] Get Movies",
  GetMoviesSuccess = "[Movie] Get Movies Success",
  GetMovie = "[Movie] Get Movie",
  GetMovieSuccess = "[Movie] Get MoviesSuccess"
}

export class GetMovies implements Action {
  public readonly type = EMovieActions.GetMovies;
}

export class GetMoviesSuccess implements Action {
  public readonly type = EMovieActions.GetMoviesSuccess;
  constructor(public payload: IMovie[]) {}
}

export class GetMovie implements Action {
  public readonly type = EMovieActions.GetMovie;
  constructor(public payload: string) {}
}

export class GetMovieSuccess implements Action {
  public readonly type = EMovieActions.GetMovieSuccess;
  constructor(public payload: IMovie) {}
}

export type MovieActions =
  | GetMovie
  | GetMoviesSuccess
  | GetMovies
  | GetMovieSuccess;
