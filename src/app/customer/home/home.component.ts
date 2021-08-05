import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
customers!:Customer[];
  constructor(private custService:CustomerService) { }

  ngOnInit(): void {
this.custService.getCust().subscribe(customers =>  this.customers = customers)
  }

}
