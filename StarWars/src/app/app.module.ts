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
import { CharactherInfoComponent } from './diaglos/characther-info/characther-info.component';

import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { FilmInfoComponent } from './diaglos/film-info/film-info.component';
import { SpeciesInfoComponent } from './diaglos/species-info/species-info.component';
import { PlanetsInfoComponent } from './diaglos/planets-info/planets-info.component';
import { VehiclesInfoComponent } from './diaglos/vehicles-info/vehicles-info.component';
import { StarshipsInfoComponent } from './diaglos/starships-info/starships-info.component';
@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    FilmListComponent,
    PlanetsComponent,
    SpeciesListComponent,
    StarshipsComponent,
    IndexComponent,
    VehiclesComponent,
    CharactherInfoComponent,
    FilmInfoComponent,
    PaginaNoEncontradaComponent,
    SpeciesInfoComponent,
    PlanetsInfoComponent,
    VehiclesInfoComponent,
    StarshipsInfoComponent,
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
