import { Component, OnInit } from '@angular/core';
import { Pizza } from './models/Pizza';
import { PizzaService } from './app.service';

@Component({
  template: ` <app-pizzas-list [pizzas]="pizzas"></app-pizzas-list> `,
  selector: 'app-root',
})
export class AppComponent implements OnInit {
  pizzas!: Pizza[];

  constructor(private pizzaService: PizzaService) {}

  ngOnInit() {
    this.getPizzas();
  }

  getPizzas() {
    this.pizzaService.getAllPizzas().subscribe((pizzas) => {
      this.pizzas = pizzas;
    });
  }
}
