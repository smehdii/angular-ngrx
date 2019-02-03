import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { BrowserModule } from "@angular/platform-browser";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";

import { appReducers } from "./store/reducers/app.reducers";
import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { ConfigEffects } from "./store/effects/config.effects";
import { UserEffects } from "./store/effects/user.effects";
import { AppComponent } from "./app.component";
import { UserService } from "./services/user.service";
import { UsersComponent as UsersContainerComponent } from "./containers/users/users.component";
import { UsersComponent } from "./components/users/users.component";
import { UserComponent } from "./containers/user/user.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { MoviesComponent as MoviesContainer } from "./containers/movies/movies.component";
import { MovieComponent } from "./containers/movie/movie.component";
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";
import { MoviesComponent } from "./components/movies/movies.component";
import { MovieEffects } from "./store/effects/movie.effects";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UsersContainerComponent,
    UserDetailsComponent,
    MoviesComponent,
    MoviesContainer,
    MovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, ConfigEffects, MovieEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
