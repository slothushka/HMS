import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AdminService } from './admin.service';
import { LogoutnavbarComponent } from "../logoutnavbar/logoutnavbar.component";


export class DoctorDetails{
    "name":string="";
    "emailId":string="";
    "password":string="";
    "mobile_number": number =0;
  } 

export class SpecList{
specialty: any;
}

@Component({
    selector: 'app-doctorregister',
    standalone: true,
    templateUrl: './doctorregister.component.html',
    styleUrl: './doctorregister.component.css',
    imports: [FormsModule, RouterLink, CommonModule, LogoutnavbarComponent]
})


export class DoctorregisterComponent {

  spec: SpecList[] = [];

  specChange!:any;

  selectSpec(event : Event){
    this.specChange = (event.target as HTMLSelectElement).value;
  }

  doc: DoctorDetails = new DoctorDetails();

  getDocDetails() {
    return {
      "specialty": this.specChange,
      "doctor": [{
        "name": this.doc.name,
        "emailId": this.doc.emailId,
        "mobile_number": this.doc.mobile_number,
        "password": this.doc.password
      }]
    };
  }

  constructor(private service:AdminService){}

  ngOnInit():void{
    this.getDetails();
  }

  getDetails(){
    this.service.getSpecDetails().subscribe(data =>{
      this.spec = data as SpecList[];
    })
  }

  onSubmit(){
    console.log(this.getDocDetails());
    this.service.setDoctorDetails(this.getDocDetails()).subscribe((data:any) =>{
      alert("Register successfully");
    })
  }

 
}
