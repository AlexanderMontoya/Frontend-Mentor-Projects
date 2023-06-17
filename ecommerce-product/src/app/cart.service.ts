import { Injectable } from '@angular/core';
import { Product } from './Product';

interface ProductCart{
  id:string,
  name:string,
  image:string,
  price:number,
  count:number,
  total:number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products:ProductCart[]=[];
  countCart:number = 0;

  constructor() { }

  addToCart(product:Product, count:number){
    const objectToUpdate = this.products.find(obj => obj.id === product.id);
    const priceFinal = product.price - (product.price * product.discount / 100);
    if(objectToUpdate){
      if(objectToUpdate.count + count <= product.stock){
        objectToUpdate.count += count ;
        objectToUpdate.total = objectToUpdate.count * objectToUpdate.price;
        this.countCart += count;
      }
    }else{
      this.products.push({
        id: product.id,
        name: product.name,
        image: product.images[0].url,
        price: priceFinal,
        count: count,
        total: priceFinal * count
      });
      this.countCart += count;
    }
  }
  removeFromCart(id:number){
    this.products.splice(id, 1);
  }
}
