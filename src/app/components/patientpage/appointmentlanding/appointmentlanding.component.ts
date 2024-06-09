import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoutnavbarComponent } from "../../logoutnavbar/logoutnavbar.component";

@Component({
    selector: 'app-appointmentlanding',
    standalone: true,
    templateUrl: './appointmentlanding.component.html',
    styleUrl: './appointmentlanding.component.css',
    imports: [RouterLink, LogoutnavbarComponent]
})
export class AppointmentlandingComponent {

}
