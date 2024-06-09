import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { admin } from './admin.model';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [FormsModule,RouterLink,],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {

  ad:admin ={
    emailId: '',
    password:''
  };

  constructor(private adminlog: AdminService,private route:Router){}

  onSubmit(event: Event) {
   // event.preventDefault();
    this.adminlog.loginAdmin(this.ad).subscribe({
      next: (response: any) => {
        console.log('Admin logged in successfully:',response);
        if (response === "Login successfully") { 
          localStorage.setItem('role','Admin');
          this.route.navigateByUrl('doctorregister'); 
        }
      },
      error: (error) => {
        alert('Error logging in:');
        console.log(error);
      }
    });
  }

}
