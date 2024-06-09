import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoutnavbar',
  standalone: true,
  imports: [],
  templateUrl: './logoutnavbar.component.html',
  styleUrl: './logoutnavbar.component.css'
})
export class LogoutnavbarComponent {

  constructor(private route:Router){}
  logout(){
    localStorage.clear();
    this.route.navigateByUrl('');
  }

}
