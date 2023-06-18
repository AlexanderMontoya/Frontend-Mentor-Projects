import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from './environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
