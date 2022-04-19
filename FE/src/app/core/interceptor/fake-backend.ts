import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { User } from '../models/user';
import { Role } from '../models/role';
import { CustomerService } from 'src/app/services/customer.service';

const AllUser:User[]=[];


const users: User[] = [
  {
    id: 1,
    img: 'assets/images/user/admin.jpg',
    username: 'mahmod@123.com',
    password: 'mahmod',
    firstName: 'Mahmod',
    lastName: 'Hamed',
    role: Role.Admin,
    token: 'admin-token',
  },
  {
    id: 2,
    img: 'assets/images/user/teacher.jpg',
    username: 'karem@123.com',
    password: 'karem',
    firstName: 'Karem',
    lastName: 'Ghara',
    role: Role.Customer,
    token: 'teacher-token',
  },
  {
    id: 3,
    img: 'assets/images/user/student.jpg',
    username: 'technician@school.org',
    password: 'technician@123',
    firstName: 'Ashton',
    lastName: 'Cox',
    role: Role.Technician,
    token: 'student-token',
  },
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor(private customerService:CustomerService){}
  
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;
    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(handleRoute));
   
    function handleRoute() {
      switch (true) {
        case url.endsWith('/authenticate') && method === 'POST':
          return authenticate();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function authenticate() {
      
      const { username, password } = body;
      const user = users.find(
        (x) => x.username === username && x.password === password
      );
      if (!user) {
        return error('Username or password is incorrect');
      }
      return ok({
        id: user.id,
        img: user.img,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        token: user.token,
      });
    }

    // helper functions
    // function getAllCustomer(){
    //   this.customerService.getAllCustomer();
    //   console.log(this.customerService.getAllCustomer());      
    // }

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message) {
      return throwError({ error: { message } });
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }

    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
