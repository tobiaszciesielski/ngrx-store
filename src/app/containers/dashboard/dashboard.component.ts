import { Component } from '@angular/core';
import { Store } from 'src/app/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  template: `<div>
    <app-input [value]="value" (onChange)="handleChange($event)"></app-input>
    <app-button (onClick)="handleClick()">
      <ng-container text>This is my button</ng-container>
    </app-button>
    <div *ngFor="let todo of todos | async">
      <h3>{{ todo }}</h3>
    </div>
  </div>`,
})
export class DashboardComponent {
  value = '';
  todos = this.store.select<string[]>('todos');

  constructor(private store: Store) {}

  handleClick() {
    let todos = this.store.value.todos;
    todos = [this.value, ...todos];
    this.store.set('todos', todos);
    this.value = '';
  }

  handleChange(value: string) {
    this.value = value;
  }
}
