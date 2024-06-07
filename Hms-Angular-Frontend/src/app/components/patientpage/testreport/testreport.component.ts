import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoutnavbarComponent } from "../../logoutnavbar/logoutnavbar.component";

@Component({
    selector: 'app-testreport',
    standalone: true,
    templateUrl: './testreport.component.html',
    styleUrl: './testreport.component.css',
    imports: [RouterLink, LogoutnavbarComponent]
})
export class TestreportComponent {

}
