import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { Store } from './store';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}
