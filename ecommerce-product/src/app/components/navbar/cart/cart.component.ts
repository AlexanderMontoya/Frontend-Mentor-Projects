import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/Product';

interface ProductCart{
  id:string,
  name:string,
  image:string,
  price:number,
  count:number,
  total:number
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  productsCart:ProductCart[]=[];

  open:boolean = false;
  countCart:number = 0;
  constructor(public cartService:CartService){
    
  }

  ngOnInit(){
      this.productsCart = this.cartService.products;
      this.countCart = this.cartService.countCart;
  }

  contentOpen(){
    if(this.open){
      this.open = false;
    }else{
      this.open = true;
    }
  }

  removeFromCart(num:number){
    this.cartService.removeFromCart(num);
  }
}
