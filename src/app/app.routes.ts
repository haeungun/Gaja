import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MyInfoComponent } from './components/my-info/my-info.component';

// Route Configuration
export const routes: Routes = [
  { 
    // redirect to home page on load
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full',
  },{ 
    path: 'home', 
    component: HomeComponent, 
    children: [
      {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full',
      },{ 
        path: 'sign-in', 
        component: SignInComponent, 
      },{ 
          path: 'sign-up', 
          component: SignUpComponent,
      },{ 
          path: 'my-info', 
          component: MyInfoComponent,
      },
    ]
  },{ 
    path: 'store', 
    component: StoreComponent 
  }, 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);