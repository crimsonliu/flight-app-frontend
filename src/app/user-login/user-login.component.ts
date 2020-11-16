import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {

  user: User = new User("","","","");
  message: any;
  hide: boolean;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.hide = true;
  }

  public loginUser(){
    let resp = this.service.loginUser(this.user);
    resp.subscribe((data)=>{
      
      if(data=="true"){
        this.router.navigate(["/searchflight"]);
      }else{
        this.message = "login failed. please try again";
      }
    });
  }
}
