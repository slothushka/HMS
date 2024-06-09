import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { test } from './test.model';

@Injectable({
  providedIn: 'root'
})
export class TesterService {

  constructor(private http:HttpClient) { }

  loginTester(tes: test): Observable<any> {
    return this.http.post<any>('http://localhost:8080/testlogin', tes,{ responseType: 'text' as 'json' });//, { responseType: 'text' as 'json' }
  }

}
