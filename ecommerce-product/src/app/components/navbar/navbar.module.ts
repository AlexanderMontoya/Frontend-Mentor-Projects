import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { LinksComponent } from './links/links.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarComponent,
    LinksComponent,
    CartComponent
  ],
  exports:[
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NavbarModule { }
