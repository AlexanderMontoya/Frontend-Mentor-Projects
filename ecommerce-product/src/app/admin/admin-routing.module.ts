import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListProductsComponent } from './admin-list-products/admin-list-products.component';
import { AdminCreateProductComponent } from './admin-create-product/admin-create-product.component';
import { AdminEditProductComponent } from './admin-edit-product/admin-edit-product.component';
import { authenticationAdmin } from './admin-guardian';

const routes: Routes = [
  {
    path:'products',
    canActivate: [authenticationAdmin()],
    component: AdminListProductsComponent
    
  },
  {
    path:'products/add',
    canActivate: [authenticationAdmin()],
    component: AdminCreateProductComponent
  },
  {
    path:'products/:id_product/edit',
    canActivate: [authenticationAdmin()],
    component: AdminEditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
