export class updateDoc{
    doctorid:number;
    userid:number;
    date:Date;
    tabletname:string;
    tabletcount:number;
    morning:boolean;
    afternoon:boolean;
    night:boolean;

    constructor(){
        this.doctorid=0,
        this.userid=0,
        this.date=new Date,
        this.tabletname='',
        this.tabletcount=0,
        this.morning=true,
        this.afternoon=true,
        this.night=true
    }
}