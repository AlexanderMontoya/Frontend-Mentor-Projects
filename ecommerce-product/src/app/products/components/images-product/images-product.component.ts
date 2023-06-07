import { Component, Input } from '@angular/core';

import { Product } from 'src/app/Product';
import { Thumbnail } from 'src/app/Product';


@Component({
  selector: 'app-images-product',
  templateUrl: './images-product.component.html',
  styleUrls: ['./images-product.component.scss']
})

export class ImagesProductComponent {
  @Input() product?:Product;

  select:number = 0;
  image:string = '';
  
  thumbnails: Thumbnail[] = [];

  ngOnInit(){
    this.image = this.product?.images.list_images[this.select].url ?? '';
    this.thumbnails = this.product?.images.thumbnails ?? [];
  }

  previous(){
    if(this.select>0){
      this.select -= 1;
      this.image = this.product?.images.list_images[this.select].url ?? '';
    }
  }

  next(){
    if(this.select < this.thumbnails.length - 1){
      this.select += 1;
      this.image = this.product?.images.list_images[this.select].url ?? '';
    }
  }

  cambiar(num:number){
    this.image = this.product?.images.list_images[num].url ?? '';
    this.thumbnails.forEach(element => {
      element.select = false;
    });
    this.thumbnails[num].select = true;
    this.select = num;
  }
}
