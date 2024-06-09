import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { patient } from './patient.model';
import { PatientloginService } from './patientlogin.service';



@Component({
  selector: 'app-patientlogin',
  standalone: true,
  imports: [RouterLink,FormsModule,],
  templateUrl: './patientlogin.component.html',
  styleUrl: './patientlogin.component.css'
})
export class PatientloginComponent {

  pat: patient ={
    emailId:'',
    password:''
  };

  

  constructor(private patService:PatientloginService, private http: HttpClient,private route:Router){}

  




onSubmit(event: Event) {
  event.preventDefault();
  this.patService.loginPatient(this.pat).subscribe({
    next: (response: any) => {
      const user = response.user;
      const user_id = user.user_id;
      const token = response.token;
      localStorage.setItem('userId', user_id.toString());
      localStorage.setItem('token', token);
      localStorage.setItem('role',user.role);
      console.log(user_id);
      alert('patient logged in successfully');
      this.route.navigateByUrl('patientpage'); // navigate to 'patientpage'
    },
    error: (error) => {
      console.error('Error logging in:', error);
    }
  });
}


}



