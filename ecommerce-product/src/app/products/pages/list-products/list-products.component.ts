import { Component } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  products:Product[]=[];

  constructor(public productsService:ProductsService){

  }

  ngOnInit(){
    this.products = this.productsService.products;
  }
}
