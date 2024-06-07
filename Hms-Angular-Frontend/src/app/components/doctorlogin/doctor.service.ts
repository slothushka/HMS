import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { doctor } from './doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  loginDoctor(doc: doctor): Observable<any> {
    return this.http.post<any>('http://localhost:8080/doctorlogin', doc, { responseType: 'text' as 'json' });
  }

  getDocterDetails(details:any){
    return this.http.post<any>("http://localhost:8080/doctorobj",details);
  }
}
