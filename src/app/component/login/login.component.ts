import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  title='auth-guard-demo';

  constructor(private auth:AuthenticationService, private route: Router) {
    if(this.auth.loggedIn){
      this.route.navigate(['/account'])
    }
   }

  ngOnInit(): void {}
 login():void{
   if(this.username != ''&& this.password != ""){
     if(this.auth.login(this.username,this.password)){
       this.route.navigate(['/account']);
     }
     else {
       alert("Wrong username or password");
     }

   }
   this.password="";
 }
 
}


// loginUser(){
//   this.authService.isAuthenticated(this.loginName,this.loginPwd).subscribe(res =>{
//     if(res.valid){
//       localStorage.setItem('authenticated','true');
//       this.route.navigate(['/']);
//     }
//     else{
//       alert("Failed");
//     }
//   }
//   }
// loginUser() {
//   this.authService.isAuthenticated(this.loginName,this.loginPwd).subscribe(res => {
//     if(res.valid){
//       alert("success");
//     }
//     debugger
//   })
// }