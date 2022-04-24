import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequsetCustomer } from '../beans/requset-customer';
import { Observable } from 'rxjs';
import { APP_URL } from '../beans/global-constant';

@Injectable({
  providedIn: 'root'
})
export class RequserCustomerService {

  constructor(private http: HttpClient) { }

  addRequestCustomer(requestCustomer: RequsetCustomer):Observable<RequsetCustomer> {
    return this.http.post<RequsetCustomer>(APP_URL+'requestCustomer/add-request_customer',requestCustomer)
  }

  getAllRequestCustomerBycostomerId(customerId:number):Observable<RequsetCustomer[]> {
    return this.http.get<RequsetCustomer[]>(APP_URL+'requestCustomer/get-request_customer-By-IdCostomer?costomerId='+customerId)
  }

  getAllRequestCustomers():Observable<RequsetCustomer[]> {
    return this.http.get<RequsetCustomer[]>(APP_URL+'requestCustomer/get-all-request_customer')
  }

  deleteRequestCustomerbyid(id: number): Observable<RequsetCustomer> {
    return this.http.delete<RequsetCustomer>(APP_URL+"requestCustomer/delete-request_customer?id="+id);
  }

}
