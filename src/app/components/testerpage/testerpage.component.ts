import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoutnavbarComponent } from "../logoutnavbar/logoutnavbar.component";


@Component({
    selector: 'app-testerpage',
    standalone: true,
    templateUrl: './testerpage.component.html',
    styleUrl: './testerpage.component.css',
    imports: [RouterLink, LogoutnavbarComponent]
})
export class TesterpageComponent {

  
  

}
