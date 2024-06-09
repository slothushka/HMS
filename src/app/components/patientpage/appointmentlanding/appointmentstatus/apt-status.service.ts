import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { status } from './appointmentstatus.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AptStatusService {

  constructor(private http:HttpClient) { }

  getAptStatus(userid: any): Observable<any> {
    return this.http.get(`http://localhost:8080/showappointment/${userid}`);
  }
  
}
