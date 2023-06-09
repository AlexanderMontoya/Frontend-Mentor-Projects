import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListProductsComponent } from './pages/list-products/list-products.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {
    path:'',
    component: ListProductsComponent
  },{
    path:':name_product',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
