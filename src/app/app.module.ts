import { NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';

// modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PizzaService } from './app.service';
import { PizzaComponent } from './components/pizza/pizza.component';
import { PizzasListComponent } from './components/pizzas-list/pizzas-list.component';

@NgModule({
  declarations: [AppComponent, PizzaComponent, PizzasListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [PizzaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
