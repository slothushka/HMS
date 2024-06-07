import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpecList } from '../../../adminpage/doctorregister.component';
import { Appointment } from './bookappointment.component';
import { Doctor } from './booking-appointment.model';

@Injectable({
  providedIn: 'root'
})
export class BookaptService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getSpecializations(): Observable<SpecList[]> {
    return this.http.get<SpecList[]>(`${this.baseUrl}/spectype`);
  }

  getDoctors(specid:number): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.baseUrl}/docname/${specid}`);
  }

  bookAppointment(appointment:any): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/appointmentbook`, appointment);
  }
}