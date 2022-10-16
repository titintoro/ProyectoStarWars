import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from './components/planets/planets.component';
import { IndexComponent } from './components/index/index.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';

const routes: Routes = [

  { path: 'planets', component: PlanetsComponent},
  { path: 'index', component: IndexComponent},
  { path: 'film-list', component: FilmListComponent},
  { path: '**', component: PaginaNoEncontradaComponent},
  { path: 'people-list', component: PeopleListComponent},
  { path: 'starships', component: StarshipsComponent},
  { path: 'vehicles', component: VehiclesComponent},
  { path: 'species-list', component: SpeciesListComponent},
  { path: '', redirectTo: '/index', pathMatch: 'full'}
];

@NgModule({
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
