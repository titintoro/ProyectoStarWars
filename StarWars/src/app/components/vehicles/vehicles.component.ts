import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VehiclesInfoComponent } from 'src/app/diaglos/vehicles-info/vehicles-info.component';
import { Vehicles } from 'src/app/interfaces/vehicles.interface';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  listVehicles: Vehicles[] = [];
  numPages=0
  vehiclesSelected: Vehicles | undefined;

  constructor(private vehiclesService: VehiclesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.mostrarListadoVehicles(1);
  }

  mostrarListadoVehicles(page:number){
    this.vehiclesService.listVehiclesXPage(page).subscribe((res) => {
      this.listVehicles = res.results;
      this.numPages = Math.ceil(res.count/10);
    })
  };

  mostrarImagenVehicles(vehicles:Vehicles){
    let idVehicles = vehicles.url.split('/')[5];
    return `${environment.apiUrlBaseImg}/vehicles/${idVehicles}.jpg`;
  }

  counter() {
    return new Array(this.numPages);
  }

  mostrarInfo(vehicles:Vehicles) {
    this.vehiclesService.obtenerDetalles(vehicles).subscribe((res) => {
      this.vehiclesSelected = res;
      this.dialog.open(VehiclesInfoComponent, {
        data: {
          vehicleInfo: this.vehiclesSelected
        },
      });
    });
  }

}
