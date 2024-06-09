import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BldReportService {

  constructor(private http:HttpClient) { }

  viewBldReport(userId:any){
    const bloodTestReportUrl = `http://localhost:8080/blood/${userId}`
    return this.http.get(bloodTestReportUrl);
  }
}
