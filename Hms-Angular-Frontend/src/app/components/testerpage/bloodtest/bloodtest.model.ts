export class BloodTest {
    userid: number;
    date: Date;
    age: number;
    gender: string;
    hemoglobin: number;
    rbc: number;
    wbc: number;
    platelet: number;
    calcium: number;

    constructor(){
      this.userid=0,
      this.date=new Date,
      this.age=0,
      this.gender='',
      this.hemoglobin=0,
      this.rbc=0,
      this.wbc=0,
      this.platelet=0,
      this.calcium=0
    }
  }