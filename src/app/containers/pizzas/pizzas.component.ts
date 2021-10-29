import { Component } from '@angular/core';
import { Pizza } from 'src/app/models/Pizza';
import { PizzaService } from 'src/app/app.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
})
export class PizzasComponent {
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

  handleDelete(id: number) {
    this.pizzaService.deletePizza(id);
  }
}
