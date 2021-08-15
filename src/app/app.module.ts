import { NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';

// containers
import { DashboardComponent } from './containers/dashboard/dashboard.component';

// modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { dashboardReducer } from './state/dashboard.reducer';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, FormsModule, StoreModule.forRoot({counter: dashboardReducer})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
