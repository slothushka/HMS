import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { test } from './test.model';
import { TesterService } from './tester.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testerlogin',
  standalone: true,
  imports: [RouterLink,FormsModule,],
  templateUrl: './testerlogin.component.html',
  styleUrl: './testerlogin.component.css'
})
export class TesterloginComponent {

  constructor(private testser:TesterService,private route:Router){}

  tes:test={
    emailId:'',
    password:''
  };

  onSubmit(event: Event) {
    event.preventDefault();
    this.testser.loginTester(this.tes).subscribe({
      next: (response: any) => {
        console.log('Tester logged in successfully:',response);
        if (response === "Login successfully") { 
          localStorage.setItem('role','Tester');
          this.route.navigateByUrl('testerpage'); 
        }
      },
      error: (error) => {
        alert('Error logging in:');
        console.log(error);
      }
    });
  }

}
