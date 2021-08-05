import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UiService } from 'src/app/product/ui.service';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  @Output() custId!:string;
  customers!:Customer[];
  name!:string;
  

  constructor(private custService:CustomerService,private route:ActivatedRoute,private uiService:UiService) { }

  ngOnInit(): void {
    
  }

  searchCustomer(){
    // alert(this.name);
    this.custService.searchCust(this.name).subscribe(customers=>this.customers = customers);
    this.name="";
    
  }
  toggleUpdateCust(){

  }
  delCustomer(cust:Customer){

  }
}
