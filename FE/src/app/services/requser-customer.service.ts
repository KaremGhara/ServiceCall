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

  addRequestCustomer(requestCustomer: RequsetCustomer,customerId:number):Observable<RequsetCustomer> {
    return this.http.post<RequsetCustomer>(APP_URL+'requestCustomer/add-request_customer?customerId='+customerId,requestCustomer)
  }

  getAllRequestCustomerBycostomerId(id:number):Observable<RequsetCustomer[]> {    
    return this.http.get<RequsetCustomer[]>(APP_URL+'requestCustomer/get-request_customer-By-costumerId?costumerId='+ id)
  }

  getAllRequestCustomers():Observable<RequsetCustomer[]> {
    return this.http.get<RequsetCustomer[]>(APP_URL+'requestCustomer/get-all-request_customer')
  }

  deleteRequestCustomerbyid(id: number): Observable<RequsetCustomer> {
    return this.http.delete<RequsetCustomer>(APP_URL+"requestCustomer/delete-request_customer?id="+id);
  }

  getRequsetById(id:number):Observable<RequsetCustomer> {
    return this.http.get<RequsetCustomer>(APP_URL+'requestCustomer/get-request_customer-By-Id?id='+id);
  }
  getRequsetByemail(email:string):Observable<RequsetCustomer> {
    return this.http.get<RequsetCustomer>(APP_URL+'requestCustomer/get-request_customer-By-Email?email='+email);
  }

  updateRequsetCustomer(requestCustomer: RequsetCustomer):Observable<RequsetCustomer> {
    return this.http.put<RequsetCustomer>(APP_URL+'requestCustomer/update-request_customer',requestCustomer)
  }

  findRequestByTechnicianId(id:number):Observable<RequsetCustomer[]> {
return this.http.get<RequsetCustomer[]>(APP_URL+'requestCustomer/get-request_customer-By-technician-id?technicianId='+id);
  }

  getAllRequestCustomerNotLinked():Observable<RequsetCustomer[]> {   
  return this.http.get<RequsetCustomer[]>(APP_URL+'requestCustomer/get-all-request_customer-not-linked');
  }

  getRequsetCustomerBycompleteByIdTech(techId: number):Observable<number[]> {
    return this.http.get<number[]>(APP_URL+'requestCustomer/get-all-request_customer-by-complete?techId='+techId)
  }

  getAllRequestCustomersByAttach():Observable<RequsetCustomer[]> {
    return this.http.get<RequsetCustomer[]>(APP_URL+'requestCustomer/get-all-request_customer-by-attach')
  }

  getAllReqByCompletFalse():Observable<RequsetCustomer[]> {
    return this.http.get<RequsetCustomer[]>(APP_URL+'requestCustomer/get-all-request_customer-by-complet-false')
  }

  getAllReqByCompletTrue():Observable<RequsetCustomer[]> {
    return this.http.get<RequsetCustomer[]>(APP_URL+'requestCustomer/get-all-request_customer-by-complet-true')
  }

  getAllRequestCustomerByComletedOrNotOrAttach():Observable<number[]> {
    return this.http.get<number[]>(APP_URL+'requestCustomer/get-all-request_customer-by-complet-or-not-or-attach')
  }

  getAllRequestCustomerNotLinkedHome():Observable<RequsetCustomer[]> {   
    return this.http.get<RequsetCustomer[]>(APP_URL+'requestCustomer/get-all-request_customer-not-linked-home');
    }

    getAllRequestCustomerNotLinkedWork():Observable<RequsetCustomer[]> {   
      return this.http.get<RequsetCustomer[]>(APP_URL+'requestCustomer/get-all-request_customer-not-linked-work');
      }
}
