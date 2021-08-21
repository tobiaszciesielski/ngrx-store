import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Pizza {
  id?: number;
  name: string;
  ingredients: string[];
}

@Component({
  template: `
    <h1>Pizzas</h1>
    <div *ngFor="let pizza of pizzas">
      <h3>{{ pizza.name }}</h3>
      <ul>
        <li *ngFor="let ingredient of pizza.ingredients">
          {{ ingredient }}
        </li>
      </ul>
    </div>
  `,
  selector: 'app-root',
})
export class AppComponent implements OnInit {
  pizzas!: Pizza[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPizzas();
  }

  async getPizzas() {
    this.pizzas = await this.http
      .get<Pizza[]>('http://localhost:3000/pizzas')
      .toPromise();
  }
}
