import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/interfaces/peopleInfo-interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-characther-info',
  templateUrl: './characther-info.component.html',
  styleUrls: ['./characther-info.component.css'],
})
export class CharactherInfoComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {}

  //muestra la imagen por el id del characther
  mostrarImagen(url : string) {
    let id = url.split('/')[5];
    return `${environment.apiUrlBaseImg}/characters/${id}.jpg`;
  }
}
