import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { LinksComponent } from './links/links.component';


@NgModule({
  declarations: [
    NavbarComponent,
    LinksComponent
  ],
  exports:[
    NavbarComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class NavbarModule { }
