import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from '../BIll';

@Injectable({
  providedIn: 'root'
})
export class BillService {
 private apiUrl='http://localhost:5000/bills';

  constructor(private http:HttpClient) { }

  getBills():Observable <Bill[]> {
    return this.http.get<Bill[]>(this.apiUrl);
  }

  delBill(bill:Bill):Observable<Bill>{
    const url =`${this.apiUrl}/${bill.id}`
    return this.http.delete<Bill>(url);
  }

  addBill(bill:Bill):Observable<Bill>{
    return this.http.post<Bill>(this.apiUrl,bill);
  }
  searchBill(customer:Bill["customer"]):Observable<Bill[]>{
    return this.http.get<Bill[]>(`${this.apiUrl}?customer=${customer}`);
  }
}
