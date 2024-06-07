import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BldReportService {

  constructor(private http:HttpClient) { }

  getBldPressure(userId:any){
    const pressureTestReportUrl = `http://localhost:8080/pressure/${userId}`
    return this.http.get(pressureTestReportUrl);
  }
}
