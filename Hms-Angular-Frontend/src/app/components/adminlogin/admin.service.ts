import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { admin } from './admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  loginAdmin(adm: admin): Observable<any> {
    return this.http.post<any>('http://localhost:8080/adminlogin', adm, { responseType: 'text' as 'json' });
  }

  

}
