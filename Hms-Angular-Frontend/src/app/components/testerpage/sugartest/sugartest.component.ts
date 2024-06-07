import { Component } from '@angular/core';
import { Sugar } from './sugar.model';
import { SugarService } from './sugar.service';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


const currentD=new Date();
@Component({
  selector: 'app-sugartest',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './sugartest.component.html',
  styleUrl: './sugartest.component.css'
})

export class SugartestComponent {

  form: FormGroup;

  constructor(private sugar: SugarService) {
    this.form = new FormGroup({
      userid: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
      date: new FormControl(),
      fastingtest: new FormControl(),
      gulcosetest: new FormControl(),
      aictest: new FormControl()
    });
  }

  // sug:Sugar = {
  //   userid: 0,
  //   age: 0,
  //   gender: '',
  //   date: currentD,
  //   Fastingtest: 0,
  //   Gulcosetest: 0,
  //   AICtest: 0
  // };

  sug:Sugar = new Sugar;

  onSubmit() {
    this.sug = { ...this.form.value };
    this.sugar.sugarTest(this.sug).subscribe({
      next: (response) => {
        console.log('User registered successfully:', response);
      },
      error: (error) => {
        console.error('Error registering user:', error);
      },
      complete: () => {
        console.log('Registration completed');
      }
    });
  }
}
