import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsModule } from './products/products.module';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'productos',
    loadChildren: ()=> import('./products/products.module').then(m=>ProductsModule)
  },
  {
    path:'admin',
    loadChildren: ()=> import('./admin/admin.module').then(m=>AdminModule)
  },
  {
    path:'login',
    component: LoginComponent
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
