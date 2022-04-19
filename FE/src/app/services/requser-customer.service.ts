import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequserCustomer } from '../beans/requser-customer';
import { Observable } from 'rxjs';
import { APP_URL } from '../beans/global-constant';

@Injectable({
  providedIn: 'root'
})
export class RequserCustomerService {

  constructor(private http: HttpClient) { }

  addRequestCustomer(requestCustomer: RequserCustomer,costomerId:number):Observable<RequserCustomer> {
    return this.http.post<RequserCustomer>(APP_URL+'requestCustomer/add-request_customer?costomerId='+costomerId,requestCustomer)
  }

  getAllRequestCustomerBycostomerId(costomerId:number):Observable<RequserCustomer[]> {
    return this.http.get<RequserCustomer[]>(APP_URL+'requestCustomer/get-request_customer-By-IdCostomer?costomerId='+costomerId)
  }

  getAllRequestCustomers():Observable<RequserCustomer[]> {
    return this.http.get<RequserCustomer[]>(APP_URL+'requestCustomer/get-all-request_customer')
  }

  deleteRequestCustomerbyid(id: number): Observable<RequserCustomer> {
    return this.http.delete<RequserCustomer>(APP_URL+"requestCustomer/delete-request_customer?id="+id);
  }

}
