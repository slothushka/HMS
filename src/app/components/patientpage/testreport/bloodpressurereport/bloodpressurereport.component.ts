import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BldReportService } from './bld-report.service';

export class bpModel{
  userid:any;
  testid:any;
  age:any;
  gender:any;
  date:any;
  systolicBP:any;
  s_range:any;
  diastolicBP:any;
  d_range:any
}

@Component({
  selector: 'app-bloodpressurereport',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bloodpressurereport.component.html',
  styleUrl: './bloodpressurereport.component.css'
})
export class BloodpressurereportComponent implements OnInit{

  bp:bpModel={
    userid: undefined,
    age: undefined,
    gender: undefined,
    date: undefined,
    systolicBP: undefined,
    s_range: undefined,
    diastolicBP: undefined,
    d_range: undefined,
    testid: undefined
  }

  bps:bpModel[]=[];

  constructor(private bpservice:BldReportService){}
  ngOnInit(): void {
    this.viewresult();
  }

  viewresult(){
    const currentlocal=localStorage.getItem('userId');
    this.bpservice.getBldPressure(currentlocal).subscribe({
      next:(response:any) => {
        console.log(response);
        this.bps = response; // Set the response to your sug variable
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
