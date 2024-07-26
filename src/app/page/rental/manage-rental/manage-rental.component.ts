import { Component } from '@angular/core';
import { AddRentalComponent } from "../add-rental/add-rental.component";
import { ViewRentalComponent } from "../view-rental/view-rental.component";

@Component({
  selector: 'app-manage-rental',
  standalone: true,
  imports: [AddRentalComponent, ViewRentalComponent],
  templateUrl: './manage-rental.component.html',
  styleUrl: './manage-rental.component.css'
})
export class ManageRentalComponent {

}
