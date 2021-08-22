import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/Pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss'],
})
export class AppPizzaComponent {
  @Input()
  public pizza!: Pizza;
}
