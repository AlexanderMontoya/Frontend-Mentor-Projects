import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AboutProjectComponent } from './about-project/about-project.component';
import { FormComponent } from './form/form.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutProjectComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
