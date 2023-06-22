import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { Product } from 'src/app/Product';
import { ProductsService } from 'src/app/products.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  name_product:string = '';

  count:number = 0;

  product:Product={
    id: '' ,
    name: '',
    description: '',
    price: 0,
    discount: 0,
    stock: 0,
    images: []
  }

  constructor(private activRoute : ActivatedRoute,
              private router:Router, 
              public productsService:ProductsService,
              public cartService:CartService){
    
  }

  ngOnInit(){
    if(this.productsService.products.length==0){
      this.productsService.chargeProducts().subscribe(
        myProducts=>{
          if(myProducts){
            this.productsService.products = Object.values(myProducts);

            this.searchProduct();

          }else{
            
          }
        }
      )
    }else{
      this.searchProduct();
    }
  }

  searchProduct(){
    this.activRoute.params.subscribe(params=>{
      this.name_product=params['name_product'];
      this.productsService.product = [];
      this.productsService.consultProduct(this.name_product);
      if(this.productsService.product.length>0){
        /*Verifica que hay elementos */
        this.product = this.productsService.product[0];
        this.product.price = this.product.price * 1; 
      }else{
        /*Redirecciona */
        this.router.navigate(['/productos']);
      }
    })
  }

  minus(){
    if(this.count > 0){
      this.count -=1;
    }
  }

  plus(){
    if(this.count < this.product.stock){
      this.count +=1;
    }
  }

  addToCart(){
    if(this.count>0){
      console.log("Se agrego al carrito, el producto: "+ this.product.name);
      this.cartService.addToCart(this.product, this.count);
    }
  }
}
