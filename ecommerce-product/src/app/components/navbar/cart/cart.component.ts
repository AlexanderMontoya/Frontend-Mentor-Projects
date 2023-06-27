import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/Product';
import { Router } from '@angular/router';

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
  constructor(public cartService:CartService, public router:Router){
    
  }

  ngOnInit(){
      this.productsCart = this.cartService.products;
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

  irCheckout(){
    this.open=false;
    this.router.navigate(['/checkout'])
  }
}
