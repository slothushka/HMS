import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { updateDoc } from './updatepres.model';

@Injectable({
  providedIn: 'root'
})
export class UpdatepresService {

  constructor(private http:HttpClient) { }


  showPres(upd:updateDoc): Observable<updateDoc>{
    return this.http.post<updateDoc>('http://localhost:8080/tabletsend',upd);
  }
}
