import { Component } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductsService } from 'src/app/products.service';

import { StorageService } from '../storage.service';

@Component({
  selector: 'app-admin-create-product',
  templateUrl: './admin-create-product.component.html',
  styleUrls: ['./admin-create-product.component.scss']
})
export class AdminCreateProductComponent {
  product:Product={
    id: '' ,
    name: '',
    description: '',
    price: 0,
    discount: 0,
    stock: 0,
    images: []
  }

  objectImages:File[]=[];
  imagePrincipal:string='';
  galeriaImages:string[]=[];
  constructor (public productsService:ProductsService, public storageService:StorageService){
    
  }

  ngOnInit(){
    if(this.productsService.products.length==0){
      this.productsService.chargeProducts().subscribe(
        myProducts=>{
          console.log(myProducts);
          if(myProducts ){
            this.productsService.products = Object.values(myProducts);
          }
        }
      )
    }
  }

  addProduct(){
    this.productsService.products.push(this.product);
    this.productsService.addProduct(this.productsService.products);
    this.publicar();
  }

  createID($event:any){
    let palabras = $event.target.value;
    this.product.id = palabras.toLowerCase().replace(/\s+/g, '-');
  }

  uploadImage($event:any){
    const file=$event.target.files[0];
    console.log(file);
    if(file.type=='image/jpeg'){
      const objectURL = URL.createObjectURL(file);
      if(this.imagePrincipal==''){
        this.objectImages.push(file);
        this.product.images.push(
          {
            id: this.product.images.length,
            url: file.name
          });
        this.imagePrincipal = objectURL;
      }else{
        this.objectImages[0] =file;
        this.product.images.push(
          {
            id: this.product.images.length,
            url: file.name
          });
        this.imagePrincipal = objectURL;
      }
      console.log(this.objectImages);
    }
  }

  uploadGalery($event:any){
    const file=$event.target.files[0];
    console.log(file);
    if(file.type=='image/jpeg'){
      const objectURL = URL.createObjectURL(file);
      this.objectImages.push(file);
      this.product.images.push(
        {
          id: this.product.images.length,
          url: file.name
        });
      this.galeriaImages.push(objectURL);
    }
  }

  publicar(){
    let cont=0;
    this.objectImages.forEach(element => {
      this.storageService.uploadImage(element, cont).then((url)=>{
        console.log("Url del archivo: ", url);
      }).catch((error)=>{
        console.log("Error al subir el archivo: ", error);
      });
      cont++;
    });
  }
}
