import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title!:string;
  products!:Product[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  searchProduct(){
// this.productService.getProducts().subscribe(()=>this.products=this.products.filter(p=>p.id == prod.id))
this.productService.getProd(this.title).subscribe(products => this.products = products);
  }

}
