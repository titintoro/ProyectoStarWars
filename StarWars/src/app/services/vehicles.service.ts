import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VehiclesResponse } from '../interfaces/vehicles.interface';

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
}
