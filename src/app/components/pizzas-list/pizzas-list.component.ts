import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pizza } from 'src/app/models/Pizza';

@Component({
  selector: 'app-pizzas-list',
  templateUrl: './pizzas-list.component.html',
  styleUrls: ['./pizzas-list.component.scss'],
})
export class PizzasListComponent {
  @Input()
  pizzas$!: Observable<Pizza[]>;

  @Output()
  onDelete: EventEmitter<number> = new EventEmitter();

  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['/pizzas/new']);
  }
}
