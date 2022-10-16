import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/interfaces/components-Info-interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vehicles-info',
  templateUrl: './vehicles-info.component.html',
  styleUrls: ['./vehicles-info.component.css']
})
export class VehiclesInfoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {}

  mostrarImagen(url: string) {
    let id = url.split('/')[5];
    return `${environment.apiUrlBaseImg}/vehicles/${id}.jpg`;
  }
}