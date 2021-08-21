import { Component, OnInit } from '@angular/core';
import { Pizza } from './models/Pizza';
import { PizzaService } from './app.service';

@Component({
  template: `
    <h1>Pizzas</h1>
    <ng-template [ngIf]="isLoading" [ngIfElse]="PizzasTemplate">
      <h3>Loading...</h3>
    </ng-template>

    <ng-template #PizzasTemplate>
      <div *ngFor="let pizza of pizzas" class="pizza">
        <img [src]="pizza.imageUrl" class="pizza__image" />
        <div>
          <h3>{{ pizza.name }}</h3>
          <ul>
            <li *ngFor="let ingredient of pizza.ingredients">
              {{ ingredient }}
            </li>
          </ul>
        </div>
      </div>
    </ng-template>
  `,
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  pizzas!: Pizza[];
  isLoading: boolean = false;

  constructor(private pizzaService: PizzaService) {}

  ngOnInit() {
    this.getPizzas();
  }

  getPizzas() {
    this.isLoading = true;
    this.pizzaService.getAllPizzas().subscribe((pizzas) => {
      this.pizzas = pizzas;
      this.isLoading = false;
    });
  }
}
