import { Component } from '@angular/core';
import { AddRentalComponent } from "../add-rental/add-rental.component";

@Component({
  selector: 'app-manage-rental',
  standalone: true,
  imports: [AddRentalComponent],
  templateUrl: './manage-rental.component.html',
  styleUrl: './manage-rental.component.css'
})
export class ManageRentalComponent {

}
