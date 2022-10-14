import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StarshipsResponse } from '../interfaces/starships.interface';

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
}
