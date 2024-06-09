import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AptStatusService } from './apt-status.service';


export class status{
  doctorName:any;
  time:any;
  date:any;
}
@Component({
  selector: 'app-appointmentstatus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointmentstatus.component.html',
  styleUrl: './appointmentstatus.component.css'
})
export class AppointmentstatusComponent {

  appointmentResult:string[] = [];

  ngOnInit():void {
    this.getAppointmentDetails();
  }

  constructor(private aptService:AptStatusService){}

  
  getAppointmentDetails(){
    this.aptService.getAptStatus(localStorage.getItem('userId')).subscribe(data=>{
      this.appointmentResult = data;
    });
  }
  

}
