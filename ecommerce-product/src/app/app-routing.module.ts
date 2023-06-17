import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsModule } from './products/products.module';
import { AdminModule } from './admin/admin.module';

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
