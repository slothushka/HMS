import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BloodTest } from './bloodtest.model';
import { BloodtestService } from './bloodtest.service';

const currentD=new Date()

@Component({
  selector: 'app-bloodtest',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './bloodtest.component.html',
  styleUrl: './bloodtest.component.css'
})
export class BloodtestComponent {

  form: FormGroup;

  constructor(private bldService: BloodtestService) {
    this.form = new FormGroup({
      userid: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
      date: new FormControl(),
      hemoglobin:new FormControl(),
      rbc:new FormControl(),
      wbc:new FormControl(),
      platelet:new FormControl(),
      calcium:new FormControl()
    });
  }

  // bld:BloodTest={
  //   userId: 0,
  //   date: currentD,
  //   age: 0,
  //   gender: '',
  //   Hemoglobin: 0,
  //   RBC: 0,
  //   WBC: 0,
  //   platelet: 0,
  //   calcium: 0
  // }

  bld:BloodTest = new BloodTest;


  onSubmit() {
    this.bld = { ...this.form.value };
    this.bldService.bloodtest(this.bld).subscribe({
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
