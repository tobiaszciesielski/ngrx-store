import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="onClick.emit()" [class]="className">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./app-button.component.scss'],
})
export class AppButtonComponent {
  _fullWidth: boolean = false;

  @Output()
  public onClick: EventEmitter<any> = new EventEmitter();

  @Input()
  public set fullWidth(value: boolean) {
    console.log('Setted to full width');
    this._fullWidth = value;
  }

  public get className() {
    return 'button' + (this._fullWidth ? ' full-width' : '');
  }
}