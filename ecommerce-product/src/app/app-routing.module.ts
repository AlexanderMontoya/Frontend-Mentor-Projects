import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsModule } from './products/products.module';
import { AdminModule } from './admin/admin.module';
import { CheckoutComponent } from './checkout/checkout.component';

import { authenticationGuard } from './checkout/login-guardian';

const routes: Routes = [
  {
    path:'productos',
    loadChildren: ()=> import('./products/products.module').then(m=>ProductsModule)
  },
  {
    path:'checkout',
    canActivate: [authenticationGuard()],
    component: CheckoutComponent
  },
  {
    path:'admin',
    loadChildren: ()=> import('./admin/admin.module').then(m=>AdminModule)
  },
  {
    path:'**',
    redirectTo:'productos',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
