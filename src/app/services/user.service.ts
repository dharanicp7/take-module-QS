import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../component/User';
// import { USERS } from '../component/mock-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl='http://localhost:5000/users';

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }

  delUser(user:User):Observable<User>{
    const url =`${this.apiUrl}/${user.id}`;
    return this.http.delete<User>(url);
  }

  addUser(user:User):Observable<User>{
    return this.http.post<User>(this.apiUrl,user);
  }
}