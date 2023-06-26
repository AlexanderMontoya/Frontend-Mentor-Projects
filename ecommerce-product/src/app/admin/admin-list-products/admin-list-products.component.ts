import { Component } from '@angular/core';

import { ProductsService } from 'src/app/products.service';
import { Product } from 'src/app/Product';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-admin-list-products',
  templateUrl: './admin-list-products.component.html',
  styleUrls: ['./admin-list-products.component.scss']
})
export class AdminListProductsComponent {
  products:Product[]=[];

  message:string="";
  constructor(public productsService:ProductsService){

  }
  
  ngOnInit(){
    if(this.productsService.products.length==0){
      this.productsService.chargeProducts().subscribe(
        myProducts=>{
          console.log(myProducts);
          if(myProducts ){
            this.products=Object.values(myProducts);
            this.productsService.products = this.products;
            this.message = 'Mostrando '+ this.products.length+" productos";
          }else{
            this.message='No hay Productos';
          }
        }
      )
    }else{
      this.products = this.productsService.products;
    }
  }

  eliminar(indice:number){
    this.products.splice(indice, 1);
    this.productsService.deleteProduct(indice);
    this.productsService.addProduct(this.products);
  }
}
