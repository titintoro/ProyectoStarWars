import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { People } from 'src/app/interfaces/people-interface';
import { DialogData } from 'src/app/interfaces/peopleInfo-interface';
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
  ngOnInit(): void {}

  //muestra la imagen por el id del characther
  mostrarImagen(url: string) {
    let id = url.split('/')[5];
    return `${environment.apiUrlBaseImg}/characters/${id}.jpg`;
  }

  mostrarSpecie(people: People, specie: Specie) {
    for (let i of people.species) {
      if (i.toLowerCase() ==  specie.name) {
        return specie.name;
      }
    }
    return undefined;
  }
}
