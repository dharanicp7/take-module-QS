import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Input()
  log: boolean=true;
 
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
  console.log(this.authService.log);
  }


}
