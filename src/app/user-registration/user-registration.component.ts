import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user: User = new User("","","","");
  message: any;

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  public registerNow(){
    let resp = this.service.registerUser(this.user);
    resp.subscribe((data)=>this.message=data);
  }

}
