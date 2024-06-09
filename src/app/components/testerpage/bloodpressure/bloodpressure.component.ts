// import { Component } from '@angular/core';
// import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterLink } from '@angular/router';
// import { bpModel } from './bp.model';
// import { BpService } from './bp.service';

// @Component({
//   selector: 'app-bloodpressure',
//   standalone: true,
//   imports: [ReactiveFormsModule],
//   templateUrl: './bloodpressure.component.html',
//   styleUrl: './bloodpressure.component.css'
// })
// export class BloodpressureComponent {
// form: any;
//   constructor(private bpService:BpService){}


//   bp:bpModel={
//     userid:0,
//     age:0,
//     gender:'',
//     date:'',
//     SystolicBP:0,
//     S_range:'',
//     DiastolicBP:0,
//     D_range:''
//   }


//   onSubmit(){
//     this.bpService.testerPage(this.bp).subscribe({
//       next: (response) => {
//         console.log('User registered successfully:', response);
//       },
//       error: (error) => {
//         console.error('Error registering user:', error);
//       },
//       complete: () => {
//         console.log('Registration completed');
//       }
//     });
//   }

// }


// bloodpressure.component.ts
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { bpModel } from './bp.model';
import { BpService } from './bp.service';

const currentD=new Date()

@Component({
  selector: 'app-bloodpressure',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './bloodpressure.component.html',
  styleUrls: ['./bloodpressure.component.css']
})
export class BloodpressureComponent {
  form: FormGroup;

  constructor(private bpService: BpService) {
    this.form = new FormGroup({
      userid: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
      date: new FormControl(),
      systolicBP: new FormControl(),
      s_range: new FormControl(),
      diastolicBP: new FormControl(),
      d_range: new FormControl()
    });
  }

  // bp: bpModel = {
  //   userid: 0,
  //   age: 0,
  //   gender: '',
  //   date: currentD,
  //   systolicBP: 0,
  //   s_range: '',
  //   diastolicBP: 0,
  //   d_range: ''
  // }

  bp:bpModel=new bpModel;

  onSubmit() {
    this.bp = { ...this.form.value };
    this.bpService.testerPage(this.bp).subscribe({
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