import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehicles, VehiclesResponse } from '../interfaces/vehicles.interface';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }

  listVehiclesXPage(page: number): Observable<VehiclesResponse> {
    return this.http.get<VehiclesResponse>(
      `${environment.apiUrlBase}/vehicles/?page=${page}`
    )
  }

  obtenerDetalles(vehicles: Vehicles): Observable<Vehicles> {
    let id = vehicles.url.split('/').reverse()[1];
    return this.http.get<Vehicles>(`${environment.apiUrlBase}/vehicles/${id}`);
  }
}
