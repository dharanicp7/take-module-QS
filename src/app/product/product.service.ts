import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl='http://localhost:5000/products';
  // private apiUrl='https://fakestoreapi.com/products';
  private cartUrl="http://localhost:5000/cart";


  constructor(private http : HttpClient) { }

  getProducts():Observable<Product[]>{
return this.http.get<Product[]>(this.apiUrl);
  }
  deleteProducts(prod:Product):Observable<Product>{
    const url = `${this.apiUrl}/${prod.id}`
    return this.http.delete<Product>(url);
  }
  addProducts(prod:Product){
    return this.http.post<Product>(this.apiUrl,prod)
  }
  getProd(title:Product["title"]):Observable<Product[]>{
return this.http.get<Product[]>(`${this.apiUrl}?title=${title}`);
  }
  updateProduct(prod:Product){
    return this.http.put(`${this.apiUrl}/${prod.id}`,prod);
  }
  addOnCart(prod:Product){
    return this.http.post<Product[]>(this.cartUrl,prod)
  }
}
