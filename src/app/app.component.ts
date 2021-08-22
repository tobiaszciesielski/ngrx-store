import { Component } from '@angular/core';

@Component({
  template: ` <h1>Toby's Pizza</h1>
    <hr style="margin-bottom: 30px;" />
    <router-outlet></router-outlet>`,
  selector: 'app-root',
})
export class AppComponent {}
