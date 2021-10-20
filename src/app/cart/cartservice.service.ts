import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/Product';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
private apiUrl = "http://localhost:5000/cart";
  constructor(private http:HttpClient) { }
  getCart():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }
  delCart(prod:Product):Observable<Product>{
    const url = `${this.apiUrl}/${prod.id}`;
    return this.http.delete<Product>(url);
  }
}
