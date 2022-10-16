import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Film } from 'src/app/interfaces/film-interface';
import { People } from 'src/app/interfaces/people-interface';
import { DialogData } from 'src/app/interfaces/components-Info-interface';
import { Planets } from 'src/app/interfaces/planets.interface';
import { Specie } from 'src/app/interfaces/species-interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-characther-info',
  templateUrl: './characther-info.component.html',
  styleUrls: ['./characther-info.component.css'],
})
export class CharactherInfoComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  listSpecies: Specie[] = [];
  listPeople: People[] = [];
  listPlanets: Planets[] = [];
  listFilms: Film[] = [];
  ngOnInit(): void {}

  //muestra la imagen por el id del characther
  mostrarImagen(url: string) {
    let id = url.split('/')[5];
    return `${environment.apiUrlBaseImg}/characters/${id}.jpg`;
  }

  mostrarSpecie(people: People, specie: Specie) {
    for (let i of people.species) {
      if (i == specie.url) {
        return true;
      }
    }
    return false;
  }

  mostrarMundo(people: People, planet: Planets) {
    if (people.homeworld == planet.url) {
      return true;
    }
    return false;
  }

  verPeliculas(people: People, film: Film) {
    for (let i of people.films) {
      if (i == film.url) {
        return true;
      }
    }
    return false;
  }

  mostrarImagenFilm(film: Film) {
    let id = film.url.split('/')[5];
    return `${environment.apiUrlBaseImg}/films/${id}.jpg`;
  }
}
