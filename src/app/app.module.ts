import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

import { routing } from './app.routes';

import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { StoreDetailComponent } from './components/store-detail/store-detail.component';
import { MyInfoComponent } from './components/my-info/my-info.component';
import { WaitingComponent } from './components/waiting/waiting.component';

import { AuthService } from './services/auth.service';
import { StoreService } from './services/store.service';

import { environment } from '../environments/environment';
import { SignComponent } from './components/sign/sign.component';
import { MyStoreComponent } from './components/my-store/my-store.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { SettingComponent } from './components/setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoreComponent,
    MyInfoComponent,
    StoreDetailComponent,
    WaitingComponent,
    SignComponent,
    MyStoreComponent,
    FavoriteComponent,
    SettingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    AuthService,
    StoreService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
