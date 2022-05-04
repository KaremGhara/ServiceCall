import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_URL } from '../beans/global-constant';
import { Admin } from '../beans/Admin';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  updateTechnician(admin:Admin):Observable<Admin> {
    return this.http.put<Admin>(APP_URL+"admin/update-admin",admin)
  }

  getAdminById(idAdmin: number):Observable<Admin> {
    return this.http.get<Admin>(APP_URL+"admin/get-admin-By-Id?id="+idAdmin)
  }
}
