import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BldReportService } from './bld-report.service';

export class BloodTest {
  userid: any;
  testid:any;
  date: any;
  age: any;
  gender: any;
  hemoglobin: any;
  rbc: any;
  wbc: any;
  platelet: any;
  calcium: any;
}

@Component({
  selector: 'app-bloodtestreport',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './bloodtestreport.component.html',
  styleUrl: './bloodtestreport.component.css'
})
export class BloodtestreportComponent implements OnInit{

  constructor(private bldService:BldReportService){}
  

  blds:BloodTest[]=[];

  bld:BloodTest={
    userid: 0,
    testid:0,
    date: new Date,
    age: 0,
    gender: '',
    hemoglobin: 0,
    rbc: 0,
    wbc: 0,
    platelet: 0,
    calcium: 0
  }

  ngOnInit(): void {
    this.viewresult();
  }

  viewresult(){
    const currentlocal=localStorage.getItem('userId');
    this.bldService.viewBldReport(currentlocal).subscribe({
      next:(response:any) => {
        console.log(response);
        this.blds = response; // Set the response to your sug variable
      },
      error:(err) => {
        console.log(err);
      }
    })
  }


}
