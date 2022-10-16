import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planets, PlanetsResponse } from '../interfaces/planets.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) {}

    listPlanetsXPage(page: number): Observable<PlanetsResponse> {
      return this.http.get<PlanetsResponse>(
        `${environment.apiUrlBase}/planets/?page=${page}`
      )
    }

    obtenerDetalles(planets: Planets): Observable<Planets> {
      let id = planets.url.split('/').reverse()[1];
      return this.http.get<Planets>(`${environment.apiUrlBase}/planets/${id}`);
    }

  }

