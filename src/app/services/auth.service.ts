import { Injectable, Output,EventEmitter } from '@angular/core'; 
@Injectable({  
  providedIn: 'root'  
})  
export class AuthenticationService {  
   @Output() log: EventEmitter<boolean> =new EventEmitter<boolean>();

  login(username: string, password: string):any {  
    this.log.emit(true);
    if (username == "admin" && password == "admin") {  
      localStorage.setItem('currentUser', "loggedin");  
      return true;  
    }  

  }  
  logout() {  
    this.log.emit(false);
    localStorage.removeItem('currentUser');   
  }  
  public get loggedIn(): boolean {  
    return (localStorage.getItem('currentUser') !== null);
  }  
} 






























































// import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
// import { Observable } from "rxjs";

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService{
//   constructor(private http:HttpClient) {}

//   loggedIn = false;

//   isAuthenticated(loginName: string,loginPwd: string): Observable<any>{
//     return this.http.post('http://localhost:5000/users',{"username":loginName,"password":loginPwd})
//     // .toPromise()
//     // .then(function(res){
//     //   return res.json()
//     // })
//     // .catch((err)=>{
//     //   console.log(err);
//     // })
//   }
//   login(){
//     this.loggedIn = true;
//   }
//   logout(){
//     this.loggedIn = false;
//   }
// }