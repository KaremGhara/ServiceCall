import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnswerTechnician } from '../beans/answer-technician';
import { APP_URL } from '../beans/global-constant';

@Injectable({
  providedIn: 'root'
})
export class AnswerTechnicianService {

  constructor(private http: HttpClient) { }

  
  addAnswerTechnician(answerTechnician: AnswerTechnician):Observable<AnswerTechnician> {
    return this.http.post<AnswerTechnician>(APP_URL+'answerTechnician/add-answer-technician',answerTechnician)
  }

}
