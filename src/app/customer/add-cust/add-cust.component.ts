import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-add-cust',
  templateUrl: './add-cust.component.html',
  styleUrls: ['./add-cust.component.css']
})
export class AddCustComponent implements OnInit {
  customers:Customer[]=[];
  custName!:string;
  custMob!:number;
  custEmail!:string;

  constructor(private custService:CustomerService) { }

  ngOnInit(): void {
  }
addCustomer(){
  if(!this.custName){
    alert("Enter a vaild Name")
  }

  const newCust={
    name:this.custName,
    mobile:this.custMob,
    email:this.custEmail
  }
  this.custService.addCust(newCust).subscribe(cust => this.customers.push(newCust));

  this.custName="";
  this.custMob;
  this.custEmail="";
}
}