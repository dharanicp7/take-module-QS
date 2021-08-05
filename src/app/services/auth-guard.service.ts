import { Injectable } from '@angular/core';  
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';  
@Injectable({ providedIn: 'root' })  
export class AuthGuard implements CanActivate {  
    constructor(private _router: Router) { }  
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {  
        if (localStorage.getItem('currentUser')) {  
            return true;  
        }  
        this._router.navigate(['']);  
        return false;  
    }  
} 




























































// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
// import { Observable } from "rxjs";
// import { AuthService } from "./auth.service";

// @Injectable({
//   providedIn : 'root'
// })

// export class AuthGuard implements CanActivate{
//   constructor(private authService:AuthService, private router : Router){}

//   canActivate(route:ActivatedRouteSnapshot , state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     if(this.authService.isAuthenticated("admin","admin")){
//       alert("logged in");
//         return true
//       }else{
//         alert("Failed");
//         return false;
//       }
    
 
//   }
// }
