import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../beans/customer';
import { APP_URL } from '../beans/global-constant';
import { Login } from '../beans/login';


@Injectable({
  providedIn: 'root'
})
export class LoginUsersService {
  public loggedInUser : Customer = null;
  constructor(private http: HttpClient) { }
  login1(Login:Customer):Observable<Customer> 
  {
  return this.http.post(APP_URL+"login/login",Login);
  }
}
