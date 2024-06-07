import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoutnavbarComponent } from "../logoutnavbar/logoutnavbar.component";

@Component({
    selector: 'app-patientpage',
    standalone: true,
    templateUrl: './patientpage.component.html',
    styleUrl: './patientpage.component.css',
    imports: [RouterLink, LogoutnavbarComponent]
})
export class PatientpageComponent {

}
