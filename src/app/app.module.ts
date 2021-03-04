import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { MatDialogModule, MatInputModule, MatLabel, MatMenuItem, MatPaginatorModule, MatTable, MatTableModule } from '@angular/material';
import { MoviesComponent } from './components/movies/movies.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { DetailsComponent } from './components/details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
    HeaderComponent,
    DetailsComponent,
 
   
  ],
  entryComponents:[DetailsComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,  
    HttpClientModule,
    MatPaginatorModule ,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule
    
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
