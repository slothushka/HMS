import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PatientServiceService } from './patient-service.service';
import { LogoutnavbarComponent } from "../../logoutnavbar/logoutnavbar.component";

export class PatientDetails{
  aptid:any;
  username:any;
  date:any;
  time:any;
}


@Component({
    selector: 'app-viewappointment',
    standalone: true,
    templateUrl: './viewappointment.component.html',
    styleUrl: './viewappointment.component.css',
    imports: [CommonModule, LogoutnavbarComponent]
})
export class ViewappointmentComponent implements OnInit{

  constructor(private service: PatientServiceService){}
  

  patDetails: PatientDetails[] =[];




  ngOnInit(): void {
    this.getPatientDetails();
  }

  getPatientDetails(){
    const localDocId=localStorage.getItem('docId')
    this.service.getPatientDetails(localDocId).subscribe(data=>{
      console.log(data);
      this.patDetails = data as PatientDetails[];
    })
  }

  

  // accept() {
  //   this.service.accept(this.patDetails).subscribe(() => {
  //     this.isButtonHidden = true;
  //   });
  // }

  // accept(aptId:any) {
  //   this.service.accept(aptId).subscribe(() => {
      
  //     localStorage.setItem('isButtonHidden', 'true');
  //   });
  // }

  // decline(aptId:any){
  //   this.service.decline(aptId).subscribe(() => {
      
  //     localStorage.setItem('isButtonHidden', 'true');
  //   });
  // }

  isButtonHidden: { [key: string]: boolean } = {};

  accept(aptid: string) {
    this.service.accept(aptid).subscribe();
  }

  decline(aptid: string) {
    // Your decline logic here
  }

  hideButtons(aptid: string) {
    this.isButtonHidden[aptid] = true;
  }
}
