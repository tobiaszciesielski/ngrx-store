import { NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';
import { AppPizzaComponent } from './components/pizza/pizza.component';
import { AppPizzasListComponent } from './components/pizzas-list/pizzas-list.component';
import { AppButtonComponent } from './components/app-button/app-button.component';

// containers
import { AppDashboardComponent } from './containers/dashboard/dashboard.component';

// modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// services
import { PizzaService } from './app.service';

@NgModule({
  declarations: [
    // components
    AppComponent,
    AppPizzaComponent,
    AppPizzasListComponent,
    AppButtonComponent,

    // containers
    AppDashboardComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [PizzaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
