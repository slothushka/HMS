import { DatePipe } from '@angular/common';

export class Sugar {
    userid: number;
    age: number;
    gender: string;
    date: Date;
    fastingtest: number;
    gulcosetest: number;
    aictest: number;
    constructor(){
      this.userid=0;
      this.age=0;
      this.gender='';
      this.date= new Date;
      this.fastingtest=0;
      this.gulcosetest=0;
      this.aictest=0;

    }
  }