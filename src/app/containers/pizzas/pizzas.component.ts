import { Component } from '@angular/core';
import { Pizza } from 'src/app/models/Pizza';
import { PizzaService } from 'src/app/app.service';
import { Observable, of, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  mergeMap,
  switchMap,
} from 'rxjs/operators';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
})
export class PizzasComponent {
  pizzas$ = new Observable<Pizza[]>();
  name$ = new Subject<string>();

  constructor(private pizzaService: PizzaService) {
    this.pizzas$ = this.name$.pipe(
      debounceTime(800),
      distinctUntilChanged(),
      switchMap((name) => this.pizzaService.findByName(name))
    );
  }

  ngOnInit() {
    this.getPizzas();
  }

  getPizzas(): void {
    this.pizzas$ = this.pizzaService.getAllPizzas();
  }

  handleDelete(id: number): void {
    this.pizzaService.deletePizza(id);
  }
}
