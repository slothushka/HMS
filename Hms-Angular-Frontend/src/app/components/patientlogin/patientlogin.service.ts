import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { patient } from './patient.model';
//import { LoginResponse } from './patientlogin.component';

@Injectable({
  providedIn: 'root'
})
export class PatientloginService {

  constructor(private http: HttpClient) { }

//   loginPatient(pat: patient): Observable<any> {
//     return this.http.post<any>('http://localhost:8080/userlogin', pat, { responseType: 'text' as 'json' });
// }
loginPatient(pat: patient): Observable<any> {
  return this.http.post<any>('http://localhost:8080/login', pat, { responseType:'json' });
}

getUserDetails(details:any){
  return this.http.post<any>("http://localhost:8080/userobj",details);
}
}
