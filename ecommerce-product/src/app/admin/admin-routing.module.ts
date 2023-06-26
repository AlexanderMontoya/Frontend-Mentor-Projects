import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListProductsComponent } from './admin-list-products/admin-list-products.component';
import { AdminCreateProductComponent } from './admin-create-product/admin-create-product.component';
import { AdminEditProductComponent } from './admin-edit-product/admin-edit-product.component';
import {  authenticationGuarda } from '../checkout/login-guardian';

const routes: Routes = [
  {
    path:'products',
    canActivate: [authenticationGuarda()],
    component: AdminListProductsComponent
    
  },
  {
    path:'products/add',
    component: AdminCreateProductComponent
  },
  {
    path:'products/:id_product/edit',
    component: AdminEditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
