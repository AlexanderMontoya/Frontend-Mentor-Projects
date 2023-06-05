import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { ProductComponent } from './pages/product/product.component';


import { FormsModule } from '@angular/forms';
import { ImagesProductComponent } from './components/images-product/images-product.component';

@NgModule({
  declarations: [
    ListProductsComponent,
    ProductComponent,
    ImagesProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
