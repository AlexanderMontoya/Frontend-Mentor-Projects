import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsModule } from './products/products.module';

const routes: Routes = [
  {
    path:'productos',
    loadChildren: ()=> import('./products/products.module').then(m=>ProductsModule)
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
