import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {RentComponent} from "./rent/rent.component";
import {RentedmoviesComponent} from "./rentedmovies/rentedmovies.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'movie-list' },
  { path: 'movie-list', component: ListComponent },
  { path: 'movie-details/:movie-id', component: DetailsComponent },
  {
  path: 'header',
 component: HeaderComponent,
  children: [{
    path: 'login',
    component: LoginComponent
  }]
},
  {
  path: 'details',
 component: DetailsComponent,
  children: [{
    path: 'rent',
    component: RentComponent
  }]
},
  {
  path: 'header',
 component: HeaderComponent,
  children: [{
    path: 'rentedmovies',
    component: RentedmoviesComponent
  }]
}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
