import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  title!:string;
  price!:number;
  products!:Product[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  onSubmit(prod:Product){
    if(!this.title){
      alert("please enter a valid name or price")
    }

    const newProduct = {
      title:this.title,
      price:this.price
    }

    this.productService.addProducts(newProduct).subscribe( prod=> this.products.push(newProduct));

    this.title="";

  }

}
