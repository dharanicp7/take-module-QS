import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl='http://localhost:5000/customer';

  constructor(private http : HttpClient) { }
  
  getCust():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.apiUrl);
  }

  addCust(cust:Customer):Observable<Customer>{
    return this.http.post<Customer>(this.apiUrl,cust);
  }

  searchCust(name:Customer["name"]):Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.apiUrl}?name=${name}`);
}
deleteCust(cust:Customer):Observable<Customer>{
  const url =`${this.apiUrl}/${cust.id}`
  return this.http.delete<Customer>(url);
}
updateCust(cust:Customer){
  return this.http.put(`${this.apiUrl}/${cust.id}`,cust);
}
}