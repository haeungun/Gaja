import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SignComponent } from './components/sign/sign.component';
import { StoreComponent } from './components/store/store.component';
import { StoreDetailComponent } from './components/store-detail/store-detail.component';
import { MyInfoComponent } from './components/my-info/my-info.component';
import { WaitingComponent } from './components/waiting/waiting.component';
import { MyStoreComponent } from './components/my-store/my-store.component';

// Route Configuration
export const routes: Routes = [
  { 
    // redirect to home page on load
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full',
  },{ 
    // Router path for home movement
    path: 'home', 
    component: HomeComponent, 
    children: [ // Children for moving routers within the home
      {
        path: '',
        redirectTo: 'sign',
        pathMatch: 'full',
      },{
        path: 'sign',
        component: SignComponent,
      },{
        path: 'my-info',
        component: MyInfoComponent,
      },{
        path: 'waiting',
        component: WaitingComponent,
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
  },{
    path: 'my-store',
    component: MyStoreComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);