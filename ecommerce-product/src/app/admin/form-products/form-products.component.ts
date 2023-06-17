import { Component } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { Product } from 'src/app/Product';

import { Storage, ref ,uploadBytes, listAll, getDownloadURL, list } from '@angular/fire/storage';

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
  styleUrls: ['./form-products.component.scss']
})
export class FormProductsComponent {
  product:Product={
    id: '' ,
    name: '',
    description: '',
    price: 0,
    discount: 0,
    stock: 0,
    images: []
  }
  images:string[]=[];

  constructor (public productService:ProductsService, private storage:Storage){
    
  }


  ngOnInit(){
    
    this.getImages();
  }

  uploadImage($event:any){
    const file=$event.target.files[0];
    console.log(file);
    const imgRef=ref(this.storage,`productos/${this.product.id}-${this.product.images.length + 1}`);
    uploadBytes(imgRef, file)
    .then(response=>console.log(response))
    .catch(error=>console.log(error));
  }

  getImages(){
    const imagesRef= ref(this.storage,'productos');
    listAll(imagesRef)
      .then(async response=>{
        console.log(response);
        this.images = [];
        for (let item of response.items) {
          console.log(item.name)
          const url = await getDownloadURL(item);
          this.images.push(url);
        }
      })
      .catch(error=>console.log(error));
  }
}
