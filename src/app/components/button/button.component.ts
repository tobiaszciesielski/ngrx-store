import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="onClick.emit()">
      <ng-content select="[text]"></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() text!: string;
  @Output() onClick = new EventEmitter();
}
