import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./containers/users/users.component";
import { UserComponent } from "./containers/user/user.component";
import { MoviesComponent } from "./containers/movies/movies.component";
import { MovieComponent } from "./containers/movie/movie.component";

const routes: Routes = [
  { path: "", redirectTo: "/users", pathMatch: "full" },
  { path: "users", component: UsersComponent },
  { path: "user/:id", component: UserComponent },
  { path: "movies", component: MoviesComponent },
  { path: "movie/:id", component: MovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
