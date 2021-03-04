import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
  path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'movies',
    component: MoviesComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule],
  exports: [RouterModule, 
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule]
})
export class AppRoutingModule { }