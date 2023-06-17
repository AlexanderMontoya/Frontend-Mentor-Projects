import { Component, Input } from '@angular/core';

import { Image, Product } from 'src/app/Product';
import { Thumbnail } from 'src/app/Product';

import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-images-product',
  templateUrl: './images-product.component.html',
  styleUrls: ['./images-product.component.scss']
})

export class ImagesProductComponent {
  select:number = 0;
  image:string = '';

  images:Image[]=[];
  thumbnails: Thumbnail[] = [];

  constructor(public productService:ProductsService){

  }

  ngOnInit(){
    this.images = this.productService.product[0].images;

    this.image = this.images[this.select].url;
    this.images.forEach(element=>{
      this.thumbnails.push({
        id: element.id,
        url: element.url,
        select: false
      })
    })
    this.thumbnails[0].select = true;
  }

  previous(){
    if(this.select>0){
      this.select -= 1;
      this.image = this.images[this.select].url;
    }
  }

  next(){
    if(this.select < this.thumbnails.length - 1){
      this.select += 1;
      this.image = this.images[this.select].url;
    }
  }

  cambiar(num:number){
    this.image = this.images[num].url;
    this.thumbnails.forEach(element => {
      element.select = false;
    });
    this.thumbnails[num].select = true;
    this.select = num;
  }
}
