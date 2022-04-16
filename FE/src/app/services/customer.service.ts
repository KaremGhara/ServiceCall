import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_URL } from '../beans/global-constant';
import { Customer } from '../beans/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  addCustomer(Customer: Customer):Observable<Customer> {
    return this.http.post<Customer>(APP_URL+'customers/add-customer',Customer)
  }
  
  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(APP_URL+"customers/get-customer-By-Id?id="+id);
  }

  getAllTechnician(): Observable<Customer[]> {
    return this.http.get<Customer[]>(APP_URL+ "customers/get-all-customer")
}
}
