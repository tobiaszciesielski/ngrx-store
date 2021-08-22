// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

// services
import { PizzaService } from './app.service';
import { FormComponent } from './containers/form/form.component';

// containers
import { DashboardComponent } from './containers/dashboard/dashboard.component';

// components
import { AppComponent } from './app.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { PizzasListComponent } from './components/pizzas-list/pizzas-list.component';
import { ButtonComponent } from './components/app-button/app-button.component';
import { NotFoundComponent } from './notFound.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'form', component: FormComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    // components
    AppComponent,
    PizzaComponent,
    PizzasListComponent,
    ButtonComponent,
    NotFoundComponent,

    // containers
    DashboardComponent,
    FormComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [PizzaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
