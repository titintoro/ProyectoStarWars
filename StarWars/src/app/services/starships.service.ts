import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Starships, StarshipsResponse } from '../interfaces/starships.interface';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {


  constructor(private http: HttpClient) { }

  listStarshipsXPage(page: number): Observable<StarshipsResponse> {
    return this.http.get<StarshipsResponse>(
      `${environment.apiUrlBase}/starships/?page=${page}`
    )
  }

  obtenerDetalles(starships: Starships): Observable<Starships> {
    let id = starships.url.split('/').reverse()[1];
    return this.http.get<Starships>(`${environment.apiUrlBase}/starships/${id}`);
  }
}
