import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialsImportModule } from './materials-import/materials-import.module';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { IndexComponent } from './components/index/index.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
@NgModule({

  declarations: [
    AppComponent,
    PeopleListComponent,
    FilmListComponent,
    PlanetsComponent,
    SpeciesListComponent,
    StarshipsComponent,
    IndexComponent,
    VehiclesComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsImportModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
