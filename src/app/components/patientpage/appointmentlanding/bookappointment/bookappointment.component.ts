import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookaptService } from './bookapt.service';
import {  BookApt, Doctor, SpecList } from './booking-appointment.model';


//final details to send as object
export class FinalDoctorDetails{
  doctorid:any;
  userid:any;
  date:any;
  time:any;
}

//from backend specialty dropdown
export class Doc{
    specialty:any;
    specid!:number;
}

//overall details entering
export class Appointment {
  
  docname: Doctor = {
    name: '',
    doctor_id: 0
  };
  bookmodel: BookApt = { date: new Date(), time: new Date().toLocaleTimeString() };
}

//backend doctor details dropdown
export class DoctorSpec{
  name!:String;
  doctor_id!:number;
}

@Component({
  selector: 'app-bookappointment',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {

  //to store spec details
  specializations: SpecList[] = [];
  doctors: Doctor[] = [];
  appointment: Appointment = new Appointment();

  doc:Doc = new Doc;

  //obj of finaldetails
  fdd: FinalDoctorDetails = new FinalDoctorDetails;

  //to store doc details based on specid
  d: DoctorSpec[] = [];


  constructor(private appointmentService: BookaptService,private route:Router) { }

  //to fetch spec details while page loading
  ngOnInit(): void {
    this.appointmentService.getSpecializations().subscribe(specs => {
      this.specializations = specs as SpecList[];
    });
  }

  //detect specialization and fetch the doctor based on specid
  onSpecializationChange(specId:any): void {
    this.appointmentService.getDoctors(specId).subscribe(docs => {
      this.d = docs as DoctorSpec[];
    });

  }
  

  //final submit
  onSubmit(): void {
    this.fdd.userid = localStorage.getItem('userId');
    this.fdd.date = this.appointment.bookmodel.date;
    this.fdd.time = this.appointment.bookmodel.time;
    console.log(this.fdd);
    this.appointmentService.bookAppointment(this.fdd).subscribe(() => {
      alert("Appointment booked successfully");
      this.route.navigateByUrl('appoinmentlading');
      console.log('Appointment booked successfully');
    });
  }

  //to fetch doctor id with doctor name
  doctorId(docId:any){
    this.fdd.doctorid = docId;
  }




  
}