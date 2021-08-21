import { NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';

// modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PizzaService } from './app.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [PizzaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
