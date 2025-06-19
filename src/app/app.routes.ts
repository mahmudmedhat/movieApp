import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { People } from './components/people/people';
import { NotFound } from './components/not-found/not-found';
import { WatchList } from './components/watch-list/watch-list';
import { MovieDetails } from './components/movie-details/movie-details';
import { SearchComponent } from './components/search/search';

export const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:Home},
  {path:"movie-details/:id",component:MovieDetails},
  {path:"Watch",component:WatchList},
  {path:"search",component:SearchComponent},
  {path:"**",component:NotFound},
];
