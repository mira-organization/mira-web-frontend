import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginPageComponent }
];
