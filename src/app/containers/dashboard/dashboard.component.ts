import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from 'src/app/state/dashboard.actions';

@Component({
  selector: 'app-dashboard',
  template: `<div>
    <h2>Value: {{ value$ | async }}</h2>
    <app-button (onClick)="handleIncrement()">
      <ng-container text>Increment</ng-container>
    </app-button>

    <app-button (onClick)="handleDecrement()">
      <ng-container text>Decrement</ng-container>
    </app-button>

    <app-button (onClick)="handleReset()">
      <ng-container text>Reset</ng-container>
    </app-button>
  </div>`,
})
export class DashboardComponent {
  value$!: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.value$ = store.select('counter');
  }

  handleIncrement() {
    this.store.dispatch(increment());
  }

  handleDecrement() {
    this.store.dispatch(decrement());
  }

  handleReset() {
    this.store.dispatch(reset());
  }
}
