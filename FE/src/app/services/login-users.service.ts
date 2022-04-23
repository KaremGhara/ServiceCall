import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../beans/customer';
import { APP_URL } from '../beans/global-constant';
import { Login } from '../beans/login';
import { User } from '../beans/User';


@Injectable({
  providedIn: 'root'
})
export class LoginUsersService {
  public loggedInUser : User = null;
  constructor(private http: HttpClient) { }
  login1(Login:Login):Observable<User> 
  {
  return this.http.post<User>(APP_URL+"login/login",Login);
  }
  
}
