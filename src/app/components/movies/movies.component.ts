import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IMovie } from "../../models/movie.interface";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.sass"]
})
export class MoviesComponent implements OnInit {
  @Input()
  movies: IMovie[];

  @Output()
  movieSelected: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  navigateToMovie(id: string) {
    this.movieSelected.emit(id);
  }
}
