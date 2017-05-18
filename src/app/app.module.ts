import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { routing } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { StoreComponent } from './components/store/store.component';
import { MyInfoComponent } from './components/my-info/my-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent,
    SignInComponent,
    StoreComponent,
    MyInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
