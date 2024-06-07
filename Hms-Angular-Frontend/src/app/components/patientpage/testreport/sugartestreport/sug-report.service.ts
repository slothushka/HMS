import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SugReportService {

  constructor(private http:HttpClient) { }

  getSugTestReport(userId: any) {
    const sugarTestReportUrl = `http://localhost:8080/sugar/${userId}`;
    return this.http.get(sugarTestReportUrl);
  }
}
