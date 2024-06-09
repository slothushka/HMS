import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BloodTest } from './bloodtest.model';

@Injectable({
  providedIn: 'root'
})
export class BloodtestService {

  constructor(private http : HttpClient) { }

  bloodtest(bld:BloodTest):Observable<BloodTest>{
    return this.http.post<BloodTest>('http://localhost:8080/blood',bld);
  }
}
