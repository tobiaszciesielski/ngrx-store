import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  getPizza(id: number): Observable<Pizza> {
    return this.http.get<Pizza>(this.endpointUrl(`/pizzas/${id}`));
  }

  createPizza(pizza: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(this.endpointUrl(`/pizzas`), pizza);
  }

  updatePizza(pizza: Pizza): Observable<any> {
    return this.http.put<Pizza>(this.endpointUrl(`/pizzas/${pizza.id}`), pizza);
  }

  deletePizza(id: number): Observable<any> {
    return this.http
      .delete<boolean>(this.endpointUrl(`/pizzas/${id}`))
      .pipe(map(() => id));
  }
}
