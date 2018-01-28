import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MoviesComponent } from './movies/movies.component';
import { DisplayMovieComponent } from './displaymovie/displaymovie.component';
import { ProgramsComponent } from './programs/programs.component';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent }  from './app.component';

const appRoutes: Routes = [
   { path: 'movies', component: MoviesComponent },
    { path: 'programs', component: ProgramsComponent },
     { path: 'displaymovie', component: DisplayMovieComponent }
];

@NgModule({
 imports: [ BrowserModule,
   RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent , MoviesComponent , ProgramsComponent, DisplayMovieComponent],
  bootstrap:    [ AppComponent  ]
})
export class AppModule { }
