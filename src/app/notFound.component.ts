import { Component } from '@angular/core';

@Component({
  template: `<h1>404: Page not found</h1>
    <a routerLink="/pizzas" routerLinkActive="active">
      Go back to homepage
    </a>`,
  selector: 'app-not-found',
})
export class NotFoundComponent {}
