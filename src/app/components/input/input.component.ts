import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <input type="text" [value]="value" (change)="handleChange($event)" />
  `,
})
export class InputComponent {
  @Input() value: string = '';
  @Output() onChange = new EventEmitter<string>();

  handleChange(event: any): void {
    const element = event.target as HTMLInputElement;
    const value = element.value;
    this.onChange.emit(value);
  }
}
