
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  // saveUser(user: User): Observable<User> {
  //   console.log(user);
  //   return this.http.post<User>('http://localhost:8080/userregister', user);
  // }

  saveUser(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>('http://localhost:8080/register', user);
  }
}