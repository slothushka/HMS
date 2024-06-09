import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LogoutnavbarComponent } from "../logoutnavbar/logoutnavbar.component";

@Component({
    selector: 'app-doctorpage',
    standalone: true,
    templateUrl: './doctorpage.component.html',
    styleUrl: './doctorpage.component.css',
    imports: [RouterLink, ReactiveFormsModule, LogoutnavbarComponent]
})
export class DoctorpageComponent {

  constructor(private route:Router){}
  logout(){
    localStorage.clear();
    this.route.navigateByUrl('');
  }

}
