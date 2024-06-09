import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bpModel } from './bp.model';

@Injectable({
  providedIn: 'root'
})
export class BpService {

  constructor(private http:HttpClient) { }

  testerPage(bp:bpModel):Observable<bpModel>{
    return this.http.post<bpModel>('http://localhost:8080/pressure',bp);
  }
}
