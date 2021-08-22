import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/models/Pizza';

@Component({
  selector: 'app-pizzas-list',
  templateUrl: './pizzas-list.component.html',
  styleUrls: ['./pizzas-list.component.scss'],
})
export class PizzasListComponent {
  @Input()
  pizzas!: Pizza[];

  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['/form']);
  }
}
