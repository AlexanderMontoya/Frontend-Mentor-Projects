import { Component, Input } from '@angular/core';

import { Product } from 'src/app/Product';
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
  id:string='';
  thumbnails: Thumbnail[] = [];

  constructor(public productService:ProductsService){

  }

  ngOnInit(){
    try{
      this.id=this.productService.product[0].id;
      this.image = this.productService.product[0].images.list_images[this.select].url;
      this.thumbnails = this.productService.product[0].images.thumbnails;
    }catch(e){

    }
    
  }

  previous(){
    if(this.select>0){
      this.select -= 1;
      this.image = this.productService.product[0].images.list_images[this.select].url ?? '';
    }
  }

  next(){
    if(this.select < this.thumbnails.length - 1){
      this.select += 1;
      this.image = this.productService.product[0].images.list_images[this.select].url ?? '';
    }
  }

  cambiar(num:number){
    this.image = this.productService.product[0].images.list_images[num].url ?? '';
    this.thumbnails.forEach(element => {
      element.select = false;
    });
    this.thumbnails[num].select = true;
    this.select = num;
  }
}
