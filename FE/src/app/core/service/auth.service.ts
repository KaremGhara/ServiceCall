import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import {Login}from 'src/app/beans/login'
import { APP_URL } from 'src/app/beans/global-constant';
import { Customer } from 'src/app/beans/customer';
import { LoginUsersService } from 'src/app/services/login-users.service';
import { User } from 'src/app/beans/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private loginService: LoginUsersService) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }






  login(loginUser:Login) {
    return this.loginService.login1(loginUser)
    .pipe(
      map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes

          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }
  profile(user: User) {
    const storedItems = JSON.parse(localStorage.getItem('currentUser'));
    if(storedItems!=null){
      console.log(storedItems);
      return of({ success: true });
    }
    
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    return of({ success: false });
  }
}
