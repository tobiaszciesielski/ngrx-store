// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// services
import { PizzaService } from './app.service';
import { PizzaViewComponent } from './containers/pizza-view/pizza-view.component';

// containers
import { PizzasComponent } from './containers/pizzas/pizzas.component';

// components
import { AppComponent } from './app.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { PizzasListComponent } from './components/pizzas-list/pizzas-list.component';
import { ButtonComponent } from './components/app-button/app-button.component';
import { NotFoundComponent } from './notFound.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path: 'pizzas',
    children: [
      { path: '', component: PizzasComponent },
      { path: ':id', component: PizzaViewComponent },
      { path: 'new', component: PizzaViewComponent },
    ],
  },
  { path: '', redirectTo: '/pizzas', pathMatch: 'full' },
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
    PizzasComponent,
    PizzaViewComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
