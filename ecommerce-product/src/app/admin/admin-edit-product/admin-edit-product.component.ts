import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.scss']
})
export class AdminEditProductComponent {

  product:Product={
    id: '' ,
    name: '',
    description: '',
    price: 0,
    discount: 0,
    stock: 0,
    images: []
  }

  id_product:string='';

  constructor(private activRoute : ActivatedRoute,
              private router:Router, 
              public productsService:ProductsService){}

  ngOnInit(){
    this.activRoute.params.subscribe(params=>{
      this.id_product=params['id_product'];
      this.productsService.product = [];
      this.productsService.consultProduct(this.id_product);
      if(this.productsService.product.length>0){
        /*Verifica que hay elementos */
        this.product = {
          id: this.productsService.product[0].id,
          name: this.productsService.product[0].name,
          description: this.productsService.product[0].description,
          price: this.productsService.product[0].price,
          discount: this.productsService.product[0].discount,
          stock: this.productsService.product[0].stock,
          images: this.productsService.product[0].images
        };
        this.product.price = this.product.price * 1; 
      }else{
        /*Redirecciona */
        this.router.navigate(['/admin/products']);
      }
    })
  }

  updateProduct(){
    console.log(this.product);
    const index = this.productsService.products.indexOf(this.productsService.product[0]);
    this.productsService.updateLibro(index,this.product);
    this.productsService.products[index] = this.product; 
  }

  createID($event:any){
    let palabras = $event.target.value;
    this.product.id = palabras.toLowerCase().replace(/\s+/g, '-');
  }
}
