import { Component, OnInit } from '@angular/core';
import { Product } from '../product/Product';
import { CartserviceService } from './cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  metMine!:number;
  count:number=1;
  products!:Product[];
  currentDate=new Date();
  someDate =new Date(this.currentDate.setDate(this.currentDate.getDate()+3));
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  dayName=this.days[this.someDate.getDay()];
  dd=this.someDate.getDate();
  mm=this.someDate.getMonth();
  yy=this.someDate.getUTCFullYear();
  day=this.someDate.getDay();
 delivery = this.dayName+","+this.dd+"/"+this.mm+"/"+this.yy;




  constructor(private cartService:CartserviceService) { 
    
  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(products => this.products=products);
 
  }
  increment(){
    this.count++;
    this.metMine=this.count;
    console.log(this.metMine);
  }
  decrement(){
    this.count--;
    this.metMine=this.count;
    console.log(this.metMine);
  }
deleteCartItem(prod:Product){
this.cartService.delCart(prod).subscribe(()=>this.products = this.products.filter(p=>p.id !== prod.id));
}

}
