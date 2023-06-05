import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  name_product:string = '';

  count:number = 0;

  product={
    id: 0 ,
    name: 'Fall Limited Edition Sneakers',
    description:`These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.`,
    price: 250,
    discount: 20,
    stock: 5,
    images: [
      {
        id: 0,
        url: 'image-product-1.jpg',
      },
      {
        id: 1,
        url: 'image-product-2.jpg',
      },
      {
        id: 2,
        url: 'image-product-3.jpg',
      },
      {
        id: 3,
        url: 'image-product-4.jpg',
      }
    ],
    images_thumbnail: [
      {
        id: 0,
        url: 'image-product-1-thumbnail.jpg',
        select: true
      },
      {
        id: 1,
        url: 'image-product-2-thumbnail.jpg',
        select: false
      },
      {
        id: 2,
        url: 'image-product-3-thumbnail.jpg',
        select: false
      },
      {
        id: 3,
        url: 'image-product-4-thumbnail.jpg',
        select: false
      }
    ]
  }

  

  constructor(private activRoute : ActivatedRoute,
    private router:Router){
    
  }

  ngOnInit(){
    this.activRoute.params.subscribe(params=>{
      this.name_product=params['name_product'];
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
    console.log("Se agrego al carrito, el producto: "+ this.product.name);
    console.log(this.product);
  }
}
