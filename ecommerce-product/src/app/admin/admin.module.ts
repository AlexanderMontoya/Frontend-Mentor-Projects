import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormProductsComponent } from './form-products/form-products.component';
import { FormsModule } from '@angular/forms';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { AdminListProductsComponent } from './admin-list-products/admin-list-products.component';
import { AdminCreateProductComponent } from './admin-create-product/admin-create-product.component';
import { AdminEditProductComponent } from './admin-edit-product/admin-edit-product.component';
import { StorageService } from './storage.service';

@NgModule({
  providers: [StorageService],
  declarations: [
    FormProductsComponent,
    AdminListProductsComponent,
    AdminCreateProductComponent,
    AdminEditProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideStorage(()=>getStorage())
  ]
})
export class AdminModule { }
