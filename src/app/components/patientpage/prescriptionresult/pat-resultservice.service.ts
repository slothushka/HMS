import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatResultserviceService {

  constructor(private http:HttpClient) { }

  viewPres(userId:any){
    return this.http.get(`http://localhost:8080/tabletreturn/${userId}`)
  }

  
}
