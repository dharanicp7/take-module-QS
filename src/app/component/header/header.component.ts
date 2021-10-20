import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
token!:boolean;
 
  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  if(this.authService.loggedIn){
    this.token=true;
    console.log(this.token);
  }else{
    this.token=false;
    console.log(this.token);

  }
}
logingOut(){
  this.authService.logout();
  this.router.navigate(['/']);
  // window.location.reload();
  // console.log("logged out");
  
}

}
