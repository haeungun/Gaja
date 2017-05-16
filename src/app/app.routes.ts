import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
// Route Configuration
export const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  // { path: 'home', component: HomeComponent },
  // { path: '', component: HomeComponent, pathMatch: 'full'} // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);