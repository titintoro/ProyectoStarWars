import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film, FilmResponse } from '../interfaces/film-interface';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(private http: HttpClient) {}

  //obtiene los datos indicandole por página cuales vamos a escoger
  listFilmXpage(page: number): Observable<FilmResponse> {
    return this.http.get<FilmResponse>(
      `${environment.apiUrlBase}/films/?page=${page}`
    );
  }

  obtenerDetalles(film: Film): Observable<Film> {
    let id = film.url.split('/').reverse()[1];
    return this.http.get<Film>(`${environment.apiUrlBase}/films/${id}`);
  }
}
