import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/models/Pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss'],
})
export class PizzaComponent {
  @Output()
  onDelete: EventEmitter<number> = new EventEmitter();

  @Input()
  public pizza!: Pizza;

  constructor(private router: Router) {}

  onView() {
    this.router.navigate([`/pizzas/${this.pizza.id}`]);
  }
}
