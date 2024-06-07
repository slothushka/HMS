import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PatResultserviceService } from './pat-resultservice.service';

export class prescription{
  id:any
    doctorid:any;
    date:any;
    tabletname:any;
    tabletcount:any;
    morning:any;
    afternoon:any;
    night:any;
} 

@Component({
  selector: 'app-prescriptionresult',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './prescriptionresult.component.html',
  styleUrl: './prescriptionresult.component.css'
})
export class PrescriptionresultComponent implements OnInit{

  constructor(private presService:PatResultserviceService){}
  ngOnInit(): void {
    this.viewPrescrriptionResult();
  }

  pre:prescription[]=[];

  pres:prescription={
    id:undefined,
    doctorid: undefined,
    date: undefined,
    tabletname: undefined,
    tabletcount: undefined,
    morning: undefined,
    afternoon: undefined,
    night: undefined
  }

  

  viewPrescrriptionResult(){
    const currentlocal=localStorage.getItem('userId');
    this.presService.viewPres(currentlocal).subscribe({
      next:(response:any) => {
        console.log(response);
        this.pre = response; // Set the response to your sug variable
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
