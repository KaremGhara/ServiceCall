import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestCustomer } from '../beans/request-customer';
import { Observable } from 'rxjs';
import { APP_URL } from '../beans/global-constant';

@Injectable({
  providedIn: 'root'
})
export class RequserCustomerService {

  constructor(private http: HttpClient) { }

  addRequestCustomer(requestCustomer: RequestCustomer,costomerId:number):Observable<RequestCustomer> {
    return this.http.post<RequestCustomer>(APP_URL+'requestCustomer/add-request_customer?costomerId='+costomerId,requestCustomer)
  }

  getAllRequestCustomerBycostomerId(costomerId:number):Observable<RequestCustomer[]> {
    return this.http.get<RequestCustomer[]>(APP_URL+'requestCustomer/get-request_customer-By-IdCostomer?costomerId='+costomerId)
  }
}
