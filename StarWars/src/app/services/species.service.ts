import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Specie, SpecieResponse } from '../interfaces/species-interface';

@Injectable({
  providedIn: 'root',
})
export class SpeciesService {
  constructor(private http: HttpClient) {}

  //obtiene los datos indicandole por página cuales vamos a escoger
  listSpecieXpage(page: number): Observable<SpecieResponse> {
    return this.http.get<SpecieResponse>(
      `${environment.apiUrlBase}/species/?page=${page}`
    );
  }

  obtenerDetalles(species : Specie): Observable<Specie> {
    let id = species.url.split('/').reverse()[1];
    return this.http.get<Specie>(`${environment.apiUrlBase}/species/${id}`);
  }
}
