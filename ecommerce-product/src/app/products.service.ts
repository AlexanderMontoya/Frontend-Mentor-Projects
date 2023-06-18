import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { Product,Image,Thumbnail } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  /*Data */
  products:Product[]=[
    /* {
      id: 'fall-limited-edition-sneakers',
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
      ]
    },
    {
      id: 'nike-pegasus-40-premium',
      name: 'Nike Pegasus 40 Premium',
      description:`Una pisada elástica para cualquier tipo de carrera, la sensación familiar e ideal para ti que ofrece el Peg, vuelve para ayudarte a alcanzar tus metas. Esta versión es un hito que ofrece la misma capacidad de respuesta que te encanta, pero con más comodidad en las zonas sensibles del pie, como el arco y los dedos.`,
      price: 649.90,
      discount: 20,
      stock: 7,
      images: [
          {
            id: 0,
            url: 'image_1.jpg',
          },
          {
            id: 1,
            url: 'image_2.jpg',
          },
          {
            id: 2,
            url: 'image_3.jpg',
          },
          {
            id: 3,
            url: 'image_4.jpg',
          }
      ]
    } */
  ]
  
  product:Product[]=[];

  constructor(private httpClient:HttpClient, public cartService:CartService) { }

  consultProduct( id:string ){
    const producto = this.products.find(element=>element.id === id);
    if (producto !== undefined) {
      this.product.push(producto);
    } else {
      // Manejar el caso en el que el producto no existe
    }
  }

  chargeProducts(){
    return this.httpClient.get('https://prueba-tienda-42155-default-rtdb.firebaseio.com/productos.json');
  }

  addProduct( products : Product[] ){
    this.httpClient.put('https://prueba-tienda-42155-default-rtdb.firebaseio.com/productos.json', products).subscribe(
      response=>console.log("Se ha guardado el producto"),
      error=>console.log("Error: "+error),
    );
  }

  updateLibro( indice:number, product:Product){
    let url= 'https://prueba-tienda-42155-default-rtdb.firebaseio.com/productos/'+indice+'.json';
    this.httpClient.put(url, product).subscribe(
      response=>console.log("Se actualizo el producto"),
      error=>console.log("Error: "+error),
    );
  }

  deleteProduct(indice:number){
    let url= 'https://prueba-tienda-42155-default-rtdb.firebaseio.com/productos/'+indice+'.json';
    this.httpClient.delete(url).subscribe(
      response=>console.log("Se elimino correctamente el producto: " + response),
      error=>console.log("Error: "+error),
    );
  }
  
}
