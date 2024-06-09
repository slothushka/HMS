import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { doctor } from './doctor.model';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctorlogin',
  standalone: true,
  imports: [FormsModule,RouterLink,],
  templateUrl: './doctorlogin.component.html',
  styleUrl: './doctorlogin.component.css'
})
export class DoctorloginComponent {

  constructor(private docservice:DoctorService,private route:Router){}

  doc: doctor ={
    emailId:'',
    password:''
  };

  onSubmit(event: Event) {
    event.preventDefault();
    this.docservice.loginDoctor(this.doc).subscribe({
      next: (response: any) => {
        alert('Doctor logged in successfully:');
        if (response === "Login successfully") { 
          this.docservice.getDocterDetails(this.doc).subscribe(data=>{
            localStorage.setItem('docId',data.doctor_id);
            localStorage.setItem('role','Doctor');
            this.route.navigateByUrl('doctorpage');
        }); 
          
      } 
      },
      error: (error: any) => {
        console.error('Error logging in:', error);
      }
    });
  }
}
