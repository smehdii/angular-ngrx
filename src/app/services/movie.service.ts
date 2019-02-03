import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  moviesUrl = `${environment.apiMovieUrl}`;

  constructor(private _http: HttpClient) {}

  getMovies(): Observable<any> {
    return this._http.get<any>(this.moviesUrl);
  }
}
