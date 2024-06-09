import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SugReportService } from './sug-report.service';

export class sugartestmodel{
  userid:any;
  testid:any;
  age:any;
  gender:any;
  date:any;
  fastingtest:any;
  gulcosetest:any;
  aictest:any;
}

@Component({
  selector: 'app-sugartestreport',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './sugartestreport.component.html',
  styleUrl: './sugartestreport.component.css'
})
export class SugartestreportComponent implements OnInit{

  constructor(private sugservice:SugReportService){}


  ngOnInit(): void {
    this.viewresult();
  }

  sug:sugartestmodel={
    userid: 0,
    testid: 0,
    age: 0,
    gender: '',
    date: new Date,
    fastingtest: 0,
    gulcosetest: 0,
    aictest: 0
  }

  sugs: sugartestmodel[] = [];

  viewresult(){
    const currentlocal=localStorage.getItem('userId');
    this.sugservice.getSugTestReport(currentlocal).subscribe({
      next:(response:any) => {
        console.log(response);
        this.sugs = response; // Set the response to your sug variable
      },
      error:(err) => {
        console.log(err);
      }
    })
  }


}
