import { Component, OnInit } from '@angular/core';
import { Bill } from '../BIll';
import { BillService } from '../service/bill.service';

@Component({
  selector: 'app-bill-search',
  templateUrl: './bill-search.component.html',
  styleUrls: ['./bill-search.component.css']
})
export class BillSearchComponent implements OnInit {
  customer!:string;
  bills!:Bill[];

  constructor(private billService:BillService) { }

  ngOnInit(): void {
  }

  searchBill(){
// this.billService.getBills().subscribe(()=>this.bills=this.bills.filter(b=> b.id == id));
this.billService.searchBill(this.customer).subscribe(bills => this.bills = bills);
  }

}
