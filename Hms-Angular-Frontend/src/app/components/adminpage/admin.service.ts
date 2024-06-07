// import { HttpClient } from '@angular/common/http';
// import { Injectable, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
// import {  } from './adminpage.model';

// @Injectable({
//   providedIn: 'root'
// })

// export class AdminService {
  
//   constructor(private httpClient: HttpClient){}

//   getSpecDetails(){
//     return this.httpClient.get("http://localhost:8080/spectype");
//   }

//   setDoctorDetails(obj  :any){
//     return this.httpClient.post("http://localhost:8080/spec",obj);
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorDetails, SpecList } from './doctorregister.component';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private httpClient: HttpClient) {}

  getSpecDetails() {
    return this.httpClient.get<SpecList[]>('http://localhost:8080/spectype');
  }

  setDoctorDetails(obj:any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/spec', obj);
  }
}