import { Routes } from '@angular/router';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { ChooseroleComponent } from './components/chooserole/chooserole.component';
import { DoctorloginComponent } from './components/doctorlogin/doctorlogin.component';
import { DoctorregisterComponent } from './components/adminpage/doctorregister.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PatientloginComponent } from './components/patientlogin/patientlogin.component';
import { RegisterComponent } from './components/register/register.component';
import { TesterloginComponent } from './components/testerlogin/testerlogin.component';
import { TesterpageComponent } from './components/testerpage/testerpage.component';
import { PatientpageComponent } from './components/patientpage/patientpage.component';
import { DoctorpageComponent } from './components/doctorpage/doctorpage.component';
import { BloodpressureComponent } from './components/testerpage/bloodpressure/bloodpressure.component';
import { SugartestComponent } from './components/testerpage/sugartest/sugartest.component';
import { BloodtestComponent } from './components/testerpage/bloodtest/bloodtest.component';
import { AppointmentlandingComponent } from './components/patientpage/appointmentlanding/appointmentlanding.component';
import { BookappointmentComponent } from './components/patientpage/appointmentlanding/bookappointment/bookappointment.component';
import { UpdateprescriptionComponent } from './components/doctorpage/updateprescription/updateprescription.component';
import { ViewappointmentComponent } from './components/doctorpage/viewappointment/viewappointment.component';
import { AppointmentstatusComponent } from './components/patientpage/appointmentlanding/appointmentstatus/appointmentstatus.component';
import { TestreportComponent } from './components/patientpage/testreport/testreport.component';
import { SugartestreportComponent } from './components/patientpage/testreport/sugartestreport/sugartestreport.component';
import { BloodtestreportComponent } from './components/patientpage/testreport/bloodtestreport/bloodtestreport.component';
import { PrescriptionresultComponent } from './components/patientpage/prescriptionresult/prescriptionresult.component';
import { BloodpressurereportComponent } from './components/patientpage/testreport/bloodpressurereport/bloodpressurereport.component';
import { adminGuard } from './guard/admin.guard';
import { testerGuard } from './guard/tester.guard';
import { patientGuard } from './guard/patient.guard';
import { doctorGuard } from './guard/doctor.guard';


export const routes: Routes = [
     {'path':'',component:NavbarComponent},
    {'path':'',component:HomepageComponent},
    {'path':'register',component:RegisterComponent},
    {'path':'chooserole',component:ChooseroleComponent},
    {'path':'adminlogin',component:AdminloginComponent},
    {'path':'doctorlogin',component:DoctorloginComponent},
    {'path':'testerlogin',component:TesterloginComponent},
    {'path':'patientlogin',component:PatientloginComponent},
    {'path':'doctorregister',component:DoctorregisterComponent,canActivate : [adminGuard]},
    {'path':'testerpage',component:TesterpageComponent, canActivate: [testerGuard]},
    {'path':'patientpage',component:PatientpageComponent, canActivate:[patientGuard]},
    {'path':'doctorpage',component:DoctorpageComponent, canActivate :[doctorGuard]},
    {'path':'bppage',component:BloodpressureComponent, canActivate:[testerGuard]},
    {'path':'sugartest',component:SugartestComponent,canActivate:[testerGuard]},
    {'path':'bloodtest',component:BloodtestComponent,canActivate:[testerGuard]},
    {'path':'bptest',component:BloodpressurereportComponent,canActivate:[patientGuard]},
    {'path':'appoinmentlading',component:AppointmentlandingComponent,canActivate:[patientGuard]},
    {'path':'bookappointment',component:BookappointmentComponent,canActivate:[patientGuard]},
    {'path':'updateprescription',component:UpdateprescriptionComponent,canActivate :[doctorGuard]},
    {'path':'viewappointment',component:ViewappointmentComponent,canActivate :[doctorGuard]},
    {'path':'appointmentstatus',component:AppointmentstatusComponent,canActivate:[patientGuard]},
    {'path':'patienttestpage',component:TestreportComponent,canActivate:[patientGuard]},
    {'path':'sugartestreport',component:SugartestreportComponent,canActivate:[patientGuard]},
    {'path':'bloodtestreport',component:BloodtestreportComponent,canActivate:[patientGuard]},
    {'path':'bloodpressurereport',component:BloodpressurereportComponent,canActivate:[patientGuard]},
    {'path':'prescriptionResult',component:PrescriptionresultComponent,canActivate:[patientGuard]},

];
