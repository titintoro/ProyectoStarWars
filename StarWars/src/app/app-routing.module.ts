import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './components/film-list/film-list.component';
import { IndexComponent } from './components/index/index.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';

const routes: Routes = [
  { path: 'people-list', component: PeopleListComponent },
  { path: 'film-list', component: FilmListComponent },
  { path: 'planets-list', component: PlanetsComponent },
  { path: 'species-list', component: SpeciesListComponent },
  { path: 'vehicles-list', component: VehiclesComponent },
  { path: 'star-ships-list', component: StarshipsComponent },
  { path: 'index', component: IndexComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
