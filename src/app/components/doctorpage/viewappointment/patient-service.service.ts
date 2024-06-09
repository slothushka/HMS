import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  constructor(private http:HttpClient) { }

  getPatientDetails(docId:any){
    return this.http.get(`http://localhost:8080/appointmentview/${docId}`);
  }

  accept(appointment:any){
    console.log(appointment);
    return this.http.put(`http://localhost:8080/statusupdate/${appointment}`,appointment);
  }


  decline(appointment:any){
    console.log(appointment);
    return this.http.put(`http://localhost:8080/statusdecline/${appointment}`,appointment);
  }
  
}
