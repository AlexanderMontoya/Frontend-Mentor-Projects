import { Component } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  products:Product[]=[];

  constructor(public productsService:ProductsService){

  }

  ngOnInit(){
    if(this.productsService.products.length==0){
      this.productsService.chargeProducts().subscribe(
        myProducts=>{
          if(myProducts){
            this.products=Object.values(myProducts);
            this.productsService.products = this.products;
          }else{
            
          }
        }
      )
    }
    else{
      this.products=this.productsService.products;
    }
  }
}
