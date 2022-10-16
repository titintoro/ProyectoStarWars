import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { People, PeopleResponse } from '../interfaces/people-interface';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  //obtiene los datos indicandole por página cuales vamos a escoger
  listPeopleXpage(page: number): Observable<PeopleResponse> {
    return this.http.get<PeopleResponse>(
      `${environment.apiUrlBase}/people/?page=${page}`
    );
  }

  obtenerDetalles(people: People): Observable<People> {
    let id = people.url.split('/').reverse()[1];
    return this.http.get<People>(`${environment.apiUrlBase}/people/${id}`);
  }
}
