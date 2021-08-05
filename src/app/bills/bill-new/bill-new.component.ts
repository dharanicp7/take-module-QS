import { Component, OnInit } from '@angular/core';
import { Bill } from '../BIll';
import { BillService } from '../service/bill.service';

@Component({
  selector: 'app-bill-new',
  templateUrl: './bill-new.component.html',
  styleUrls: ['./bill-new.component.css']
})
export class BillNewComponent implements OnInit {
  id!: number;
  customer!: string;
  products!: string;
  lineItems!: number;
  quantity!: number;
  bills!:Bill[];

  constructor(private billService:BillService) { }

  ngOnInit(): void {
  }

  onAddBill(bill:Bill){
    if(!this.customer){
      alert("Enter valid data")
    }

    const newBill={
      id:this.id,
      customer:this.customer,
      products:this.products,
      lineItems:this.lineItems,
      quantity:this.quantity
    }
    this.billService.addBill(newBill).subscribe(bill => this.bills.push(newBill));
  }

}
