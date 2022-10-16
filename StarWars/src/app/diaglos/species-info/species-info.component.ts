import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/interfaces/components-Info-interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-species-info',
  templateUrl: './species-info.component.html',
  styleUrls: ['./species-info.component.css'],
})
export class SpeciesInfoComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {}

  mostrarImagen(url: string) {
    let id = url.split('/')[5];
    return `${environment.apiUrlBaseImg}/species/${id}.jpg`;
  }
}
