import { Component, OnInit } from '@angular/core';
import { Bill } from '../BIll';
import { BillService } from '../service/bill.service';

@Component({
  selector: 'app-bill-home',
  templateUrl: './bill-home.component.html',
  styleUrls: ['./bill-home.component.css']
})
export class BillHomeComponent implements OnInit {
bills!:Bill[];
  constructor(private billService:BillService) { }

  ngOnInit(): void {
    this.billService.getBills().subscribe(bills => this.bills = bills);
  }
deleteBill(bill:Bill){
  this.billService.delBill(bill).subscribe(() => this.bills=this.bills.filter( b => b.id !== bill.id));
}
}
