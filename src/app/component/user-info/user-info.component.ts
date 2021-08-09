import { Component, OnInit } from '@angular/core';
// import { USERS } from '../mock-user';
import { User } from '../User';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  users!:User[];

  constructor(private userService:UserService,private router:Router,private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
    // this.users=this.userService.getUsers();
    this.userService.getUsers().subscribe(users =>this.users = users);
  }
deleteUser(user:User){
console.log(user);
this.userService.delUser(user).subscribe(() => this.users = this.users.filter(u => u.id !== user.id))
}
logout(){
  this.authenticationService.logout();
  this.router.navigate(['/']);
}
}
