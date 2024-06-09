import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from "./components/homepage/homepage.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LogoutnavbarComponent } from "./components/logoutnavbar/logoutnavbar.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomepageComponent, NavbarComponent, LogoutnavbarComponent]
})
export class AppComponent {
  title = 'hms-angular';
}
