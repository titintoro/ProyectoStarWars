import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/interfaces/components-Info-interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.css'],
})
export class FilmInfoComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {}

  mostrarImagen(url: string) {
    let id = url.split('/')[5];
    return `${environment.apiUrlBaseImg}/films/${id}.jpg`;
  }
}
