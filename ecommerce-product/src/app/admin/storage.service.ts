import { Injectable } from '@angular/core';

import { Storage, ref ,uploadBytes, listAll, getDownloadURL, list } from '@angular/fire/storage';
import { ProductsService } from '../products.service';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  products:Product[]=[];

  listadeurls:string[]=[];

  constructor ( public productService:ProductsService, private storage:Storage){
    
  }

  setProducts(products:Product[]){
    this.productService.products = products;
  }

  chargeProducts(){
    return this.productService.chargeProducts();
  }

  uploadImage(file:File,cont:number): Promise<string>{
    const imgRef=ref(this.storage,`productos/${file.name}`);
    return new Promise<string>((resolve, reject) => {
      uploadBytes(imgRef, file)
      .then(response =>{
        getDownloadURL(response.ref).then((url) => {
          this.listadeurls[cont] = url;
          resolve(url);
        }).catch((error) => {
          reject(error);
        });
      })
      .catch(error=>reject(error));
    });
  }

  getImages(name:string){
    const imagesRef= ref(this.storage,'productos');
    listAll(imagesRef)
      .then(async response=>{
        console.log(response);
        /* this.images = []; */
        for (let item of response.items) {
          if(item.name==name){
            const url = await getDownloadURL(item);
            this.listadeurls.push(url);
          }
        }
      })
      .catch(error=>console.log(error));
  }
}
