

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RegisterService } from '../register/register.service';
import { User } from './user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ FormsModule,RouterLink,CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: User = {
    name: '',
    emailId: '',
    password: '',
    mobile_number:0
  };

  constructor(private registerService: RegisterService,private route:Router) {}

  onSubmit() {
    this.registerService.saveUser(this.user).subscribe({
      next: (response) => {
        console.log('User logged in', response);
        this.route.navigateByUrl('');
      },
      error: (error) => {
        console.error('Error logging admin', error);
      },
      complete: () => {
        console.log('logged in');
      }
    });
  }
}


