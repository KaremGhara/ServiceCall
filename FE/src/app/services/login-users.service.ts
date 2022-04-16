import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_URL } from '../beans/global-constant';
import { Login } from '../beans/login';


@Injectable({
  providedIn: 'root'
})
export class LoginUsersService {

  constructor(private http: HttpClient) { }
  login1(Loginu:Login):Observable<Login>
  {
 
  return this.http.post(APP_URL+"login/login1",Loginu);
}
}
