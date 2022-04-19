import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_URL } from '../beans/global-constant';
import { HttpClient } from '@angular/common/http';
import { Technician } from '../beans/technician';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  constructor(private http: HttpClient) { }

  
  addTechnician(technician: Technician):Observable<Technician> {
    return this.http.post<Technician>(APP_URL+"technicianController/add-technician",technician)
  }

  getAllTechnician(): Observable<Technician[]> {
    return this.http.get<Technician[]>(APP_URL+ "technicianController/get-all-technician")
}

deleteTechnician(id: number): Observable<Technician> {
  return this.http.delete<Technician>(APP_URL + "technicianController/delete-technician?id=" + id);
}

getTechnicianById(idRow: number):Observable<Technician> {
  return this.http.get<Technician>(APP_URL+"technicianController/get-technician-By-Id?id="+idRow)
}

updateTechnician(technician:Technician):Observable<Technician> {
  return this.http.put<Technician>(APP_URL+"technicianController/update-technician",technician)
}
}
