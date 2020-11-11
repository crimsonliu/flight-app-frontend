import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public registerUser(user){
    return this.http.post("http://localhost:9090/registerUser",user,{responseType:'text' as 'json'});
  }

  public loginUser(user){
    return this.http.post("http://localhost:9090/signinUser",user,{responseType:'text' as 'json'});
  }
}
