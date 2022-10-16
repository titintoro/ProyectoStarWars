import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/interfaces/components-Info-interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-planets-info',
  templateUrl: './planets-info.component.html',
  styleUrls: ['./planets-info.component.css']
})
export class PlanetsInfoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {}

  mostrarImagen(url: string) {
    let idPlanet = url.split('/')[5];
    return `${environment.apiUrlBaseImg}/planets/${idPlanet}.jpg`;
  }
}
