import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sugar } from './sugar.model';

@Injectable({
  providedIn: 'root'
})
export class SugarService {

  constructor(private http:HttpClient) { }

  sugarTest(sug:Sugar):Observable<Sugar>{
    return this.http.post<Sugar>('http://localhost:8080/sugar',sug)
  }


}
