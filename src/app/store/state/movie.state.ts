import { IMovie } from "../../models/movie.interface";

export interface IMovieState {
  movies: IMovie[];
  selectedMovie: IMovie;
}

export const initialMovieState: IMovieState = {
  movies: null,
  selectedMovie: null
};
