import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/Pizza';

@Component({
  selector: 'app-pizzas-list',
  templateUrl: './pizzas-list.component.html',
  styleUrls: ['./pizzas-list.component.scss'],
})
export class PizzasListComponent implements OnInit {
  @Input()
  pizzas!: Pizza[];

  constructor() {}

  ngOnInit(): void {}
}
