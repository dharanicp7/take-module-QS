import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {
  products!:Product[];
  name!:string;
  price!:number;
  updateId!:any;
  showUpdateProd!:boolean;
  subscription!:Subscription

  constructor(private productService:ProductService,private uiService:UiService) { 
    this.subscription=this.uiService.onToggle().subscribe(value=>this.showUpdateProd=value);
  }

  ngOnInit(): void {
this.productService.getProducts().subscribe(products=>this.products=products);
  }

  toggleUpdateProd(){
    this.uiService.toggleUpdateProd();
    // console.log("toggle");
  }
  
  delProduct(prod:Product){
    this.productService.deleteProducts(prod).subscribe(()=>this.products=this.products.filter(p=>p.id !== prod.id));
  }
  onUpdate(prod:Product){
    // if(!this.name && !this.price){
    //   alert("Please Update both fields")
    // }else{
    // const newprod={
    //   title:this.name,
    //   price:this.price
    // }
    console.log(prod.id);
    if(this.name && this.price){
      prod.title=this.name;
    prod.price=this.price;
    }else if(this.name){
      prod.title=this.name;
    }else if(this.price){
    prod.price=this.price;
    }else{
      alert("Enter valid entries")
    }
    
    this.productService.updateProduct(prod).subscribe();
    
    this.name="";
    
  }
}
