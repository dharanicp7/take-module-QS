import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { User } from '../User';
import { UserService } from 'src/app/services/user.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() onAddUser: EventEmitter<User> = new EventEmitter();

  users:User[]=[];


  // id!:number;
  username!:string;
  email!: string;
  password!:string;
  bussinessName!:string;
  address!:string;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.username){
      alert("please Enter a valid username")
    }

    const newUser={
      // id:this.id,
      username:this.username,
      email:this.email,
      password:this.password,
      bussinessName:this.bussinessName,
      address:this.address
    }

    this.userService.addUser(newUser).subscribe(user =>this.users.push(newUser));

    // this.onAddUser.emit(newUser);
    this.username="";
    this.email="";
    this.password="";
    this.bussinessName="";
    this.address='';
  }

}
