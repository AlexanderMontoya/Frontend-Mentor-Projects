import { Component, Input } from '@angular/core';

interface thumbail{
  id: number,
  url: string,
  select: boolean
};

@Component({
  selector: 'app-images-product',
  templateUrl: './images-product.component.html',
  styleUrls: ['./images-product.component.scss']
})

export class ImagesProductComponent {
  @Input() product?:any;

  image = "";
  select:number = 0;
  images_thumbnail:thumbail[] = [];

  ngOnInit(){
    this.image = this.product.images[this.select].url;
    this.images_thumbnail = this.product.images_thumbnail;
  }

  previous(){
    if(this.select>0){
      this.select -= 1;
      this.image = this.product.images[this.select].url;
    }
  }

  next(){
    if(this.select < this.images_thumbnail.length - 1){
      this.select += 1;
      this.image = this.product.images[this.select].url;
    }
  }

  cambiar(num:number){
    this.image = this.product.images[num].url;
    this.images_thumbnail.forEach(element => {
      element.select = false;
    });
    this.product.images_thumbnail[num].select = true;
    this.select = num;
  }
}
