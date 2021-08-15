import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `<div>
    <h2>Value: {{ value }}</h2>
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
  value: number = 0;

  handleIncrement() {
    this.value += 1;
  }

  handleDecrement() {
    this.value -= 1;
  }

  handleReset() {
    this.value = 0;
  }
}

