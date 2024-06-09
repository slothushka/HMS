import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { updateDoc } from './updatepres.model';
import { UpdatepresService } from './updatepres.service';
import { LogoutnavbarComponent } from "../../logoutnavbar/logoutnavbar.component";

@Component({
    selector: 'app-updateprescription',
    standalone: true,
    templateUrl: './updateprescription.component.html',
    styleUrl: './updateprescription.component.css',
    imports: [ReactiveFormsModule, FormsModule, LogoutnavbarComponent]
})
export class UpdateprescriptionComponent {

  constructor(private updService:UpdatepresService){}

  upd:updateDoc =  new updateDoc;

  onSubmit() {
    this.updService.showPres(this.upd).subscribe({
      next: (response) => {
        console.log('admin logged in', response);
      },
      error: (error) => {
        console.error('Error logging admin', error);
      },
      complete: () => {
        console.log('logged in');
      }
    });
  }

}
