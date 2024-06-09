export class bpModel{
    userid:number;
    age:number;
    gender:string;
    date:Date;
    systolicBP:number;
    s_range:string;
    diastolicBP:number;
    d_range:string

    constructor(){
        this.userid=0,
        this.age=0,
        this.gender='',
        this.date=new Date,
        this.systolicBP=0,
        this.s_range='',
        this.diastolicBP=0,
        this.d_range=''
    }
}