import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from './models/Pizza';

@Injectable()
export class PizzaService {
  constructor(private http: HttpClient) {}

  endpointUrl(endpoint: string): string {
    return `http://localhost:3000${endpoint}`;
  }

  getAllPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.endpointUrl('/pizzas'));
  }
}
