import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PeopleResponse } from '../interfaces/people-interface';

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
}
