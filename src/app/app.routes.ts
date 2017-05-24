import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { StoreDetailComponent } from './components/store-detail/store-detail.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MyInfoComponent } from './components/my-info/my-info.component';

// Route Configuration
export const routes: Routes = [
  { 
    // redirect to home page on load
    path: '', 
    redirectTo: '/home/sign-in', 
    pathMatch: 'full',
  },{ 
    // Router path for home movement
    path: 'home', 
    component: HomeComponent, 
    children: [ // Children for moving routers within the home
      {
        path: '',
        redirectTo: 'my-info',
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
    // Router path for store movement
    path: 'store', 
    component: StoreComponent 
  },{
    // Router path for store-detail movement
    path: 'store-detail', 
    component: StoreDetailComponent 
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);