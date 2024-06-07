import { Time } from "@angular/common";

export interface SpecList {
  specialty: string;
  specid: any;
}

export interface Doctor {
  name: string;
  doctor_id: any;
}

export interface BookApt{
  date:Date;
  time:string;
}

