import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SkywalkerService {
  baseURL: string = 'http://localhost:4200';
  swAPIPlanetsURL: string = 'https://swapi.dev/api/planets/';
  constructor(private http: HttpClient) {}

  getPlanetsFirstPage = () => {
    return this.http.get(`${this.swAPIPlanetsURL}`);
  };

  getPlanetsNextPage = (page: string) => {
    return this.http.get(`${page}`);
  };
}
