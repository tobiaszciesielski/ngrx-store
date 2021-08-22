import { Component, Input } from '@angular/core';
import { Pizza } from 'src/app/models/Pizza';

@Component({
  selector: 'app-pizzas-list',
  templateUrl: './pizzas-list.component.html',
  styleUrls: ['./pizzas-list.component.scss'],
})
export class AppPizzasListComponent {
  @Input()
  pizzas!: Pizza[];

  onClick() {
    console.log('hello');
  }
}
